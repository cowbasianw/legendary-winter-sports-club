import React, { useState, useEffect } from 'react';
import { Gallery as ImageGallery } from 'react-grid-gallery';
import Modal from 'react-modal';

const GalleryPage = () => {
    const [photos, setPhotos] = useState({});
    const [expandedSections, setExpandedSections] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [isResizing, setIsResizing] = useState(false); // To detect resize
    const [buttonLoading, setButtonLoading] = useState({}); // Loading state for 'Show More' buttons

    useEffect(() => {
        setLoading(true); // Start loading
        fetch('https://legendary-winter-sport-club-backend.vercel.app/galleryPhotos')
            .then(response => response.json())
            .then(data => {
                // Group photos by semester and coach
                const groupedPhotos = data.reduce((acc, photo) => {
                    const semester = photo.semster;
                    const coach = photo.coach;

                    if (!acc[semester]) acc[semester] = {};
                    if (!acc[semester][coach]) acc[semester][coach] = [];

                    acc[semester][coach].push(photo);
                    return acc;
                }, {});

                setPhotos(groupedPhotos);
                setLoading(false); // Stop loading
            })
            .catch(error => {
                console.error('Error fetching gallery photos:', error);
                setLoading(false); // Stop loading on error
            });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsResizing(true);
            setLoading(true);

            // Debounce the resize event to avoid constant triggering
            setTimeout(() => {
                setIsResizing(false);
                setLoading(false);
            }, 3000); // Adjust the timeout duration as needed
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpandSection = (semester, coach) => {
        setButtonLoading(prev => ({
            ...prev,
            [`${semester}-${coach}`]: true
        }));

        setTimeout(() => {
            setExpandedSections(prev => ({
                ...prev,
                [`${semester}-${coach}`]: !prev[`${semester}-${coach}`]
            }));
            setButtonLoading(prev => ({
                ...prev,
                [`${semester}-${coach}`]: false
            }));
        }, 5000); // Simulate a short delay for the loading effect
    };

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc); // Set the selected image URL for the modal
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null); // Clear the selected image when modal is closed
    };

    return (
        <div className="Gallery-page text-center p-10 mt-28">
            <h1 className="w-full text-center text-lg md:text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">Gallery</h1>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600"></div>
                </div>
            ) : (
                Object.keys(photos).map(semester => (
                    <div key={semester} className="semester-section mb-10">
                        <h1 className="md:text-xl lg:text-2xl text-left font-bold my-4 text-orange-600">Classes of {semester}</h1>

                        {Object.keys(photos[semester]).map(coach => (
                            <div key={coach} className="coach-section">
                                <h2 className="md:text-lg lg:text-2xl font-semibold my-4 text-orange-600">Coach: {coach}</h2>

                                <ImageGallery
                                    images={expandedSections[`${semester}-${coach}`]
                                        ? photos[semester][coach].map(photo => ({
                                            src: photo.image_url,
                                            thumbnail: photo.image_url,
                                            thumbnailWidth: 320,
                                            thumbnailHeight: 212,
                                            caption: `${photo.coach} (${photo.semster})`,
                                        }))
                                        : photos[semester][coach]
                                            .slice(0, 17)
                                            .map(photo => ({
                                                src: photo.image_url,
                                                thumbnail: photo.image_url,
                                                thumbnailWidth: 320,
                                                thumbnailHeight: 212,
                                                caption: `${photo.coach} (${photo.semster})`,

                                            }))
                                    }
                                    enableImageSelection={false} // Disable selection
                                    onClick={(index, photo) => openModal(photo.src)} // Handle click on image
                                />

                                {photos[semester][coach].length > 17 && (
                                    <button
                                        onClick={() => toggleExpandSection(semester, coach)}
                                        className="expand-button mt-4 text-blue-600 flex items-center justify-center"
                                        disabled={buttonLoading[`${semester}-${coach}`]} // Disable button during loading
                                    >
                                        {buttonLoading[`${semester}-${coach}`] ? (
                                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-orange-600"></div>
                                        ) : expandedSections[`${semester}-${coach}`] ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                ))
            )}

            {/* Modal for viewing full-size image */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel="Image Modal"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" // Keep modal centered and with a background overlay
            >
                {selectedImage && (
                    <div className="relative w-2/3 h-2/3 flex items-center justify-center  p-4 rounded-lg shadow-lg"> {/* Modal box takes 2/3 of the viewport */}
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            className="max-w-full max-h-full object-contain" // Image resizes to fit the modal
                        />
                        <button onClick={closeModal} className="absolute top-2 right-2 text-black text-xl">X</button> {/* Close button */}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default GalleryPage;
