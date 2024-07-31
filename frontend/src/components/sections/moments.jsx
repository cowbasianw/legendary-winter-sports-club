
import React, { useState, useEffect } from 'react';

import momentImage1 from '../../assets/images/moments/moments1.jpg'; // Adjust paths as necessary
import momentImage2 from '../../assets/images/moments/moments2.jpg';
import momentImage3 from '../../assets/images/moments/moments3.jpg';
import momentImage4 from '../../assets/images/moments/moments4.jpg';
import momentImage5 from '../../assets/images/moments/moments5.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';

const Moments = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const momentImages = [momentImage1, momentImage2, momentImage3, momentImage4, momentImage5];
    const [imagesToShow, setImagesToShow] = useState(1); // Default to 1 image for small screens

    const { language, toggleLanguage } = useLanguage();

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const nextMoment = () => {
        setCurrentStartIndex((prev) => (prev + 1) % momentImages.length);
    };

    const prevMoment = () => {
        setCurrentStartIndex((prev) => (prev - 1 + momentImages.length) % momentImages.length);
    };

    useEffect(() => {
        const updateImagesToShow = () => {
            if (window.innerWidth >= 1024) { // Large screens
                setImagesToShow(3);
            } else if (window.innerWidth >= 768) { // Medium screens
                setImagesToShow(2);
            } else { // Small screens
                setImagesToShow(1);
            }
        };
        updateImagesToShow();
        window.addEventListener('resize', updateImagesToShow);
        return () => window.removeEventListener('resize', updateImagesToShow);
    }, []);

    const displayedImages = momentImages
        .slice(currentStartIndex, currentStartIndex + imagesToShow)
        .concat(momentImages.slice(0, Math.max(0, (currentStartIndex + imagesToShow) - momentImages.length)));

    const [isHovered, setIsHovered] = useState(false);

    // useEffect to update hover state
    useEffect(() => {
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        return () => {
            setIsHovered(false); // Reset state on component unmount
        };
    }, []);
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="mb-12 text-center text-lg text-black">
                    {language === 'EN' ? (
                        <>
                            <h2 className="text-lg lg:text-3xl font-bold  bg-white text-orange-600 p-4 block rounded-full mx-auto" style={{ width: '50%' }}>
                                Moments
                            </h2>

                            <p className="text-sm font-bold lg:text-2xl">Explore some memorable moments from our club.</p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-lg lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto" style={{ width: '50%' }}>
                                高光时刻
                            </h2>
                            <p className="text-sm font-bold lg:text-2xl">探索我们俱乐部的一些难忘时刻。</p>
                        </>
                    )}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevMoment}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center text-white text-3xl focus:outline-none z-10 ml-1"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    &#8249;
                </button>
                <button
                    onClick={nextMoment}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center text-white text-3xl focus:outline-none z-10 mr-1"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    &#8250;
                </button>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {displayedImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden transform transition-transform duration-1000 ease-in-out hover:scale-110"
                            onClick={() => handleImageClick(image)}

                        >
                            <img
                                src={image}
                                alt={`Moment ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                                style={{ aspectRatio: '1 / 1' }}
                            />
                        </div>

                    ))}
                </div>
                {/* Modal for Full-Sized Image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                        onClick={handleCloseModal}
                    >
                        <img
                            src={selectedImage}
                            alt="Full Size"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Moments;
