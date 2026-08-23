import { useState, useEffect } from 'react';
import momentImage1 from '../../assets/images/moments/moments1.jpg';
import momentImage2 from '../../assets/images/moments/moments2.jpg';
import momentImage3 from '../../assets/images/moments/moments3.jpg';
import momentImage4 from '../../assets/images/moments/moments4.jpg';
import momentImage5 from '../../assets/images/moments/moments5.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';

const Moments = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const momentImages = [momentImage1, momentImage2, momentImage3, momentImage4, momentImage5];
    const [imagesToShow, setImagesToShow] = useState(1);

    const { language } = useLanguage();

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const nextMoment = () => {
        setCurrentIndex((prev) => (prev + 1) % momentImages.length);
    };

    const prevMoment = () => {
        setCurrentIndex((prev) => (prev - 1 + momentImages.length) % momentImages.length);
    };

    useEffect(() => {
        const updateImagesToShow = () => {
            if (window.innerWidth >= 1024) {
                setImagesToShow(3);
            } else if (window.innerWidth >= 768) {
                setImagesToShow(2);
            } else {
                setImagesToShow(1);
            }
        };
        updateImagesToShow();
        window.addEventListener('resize', updateImagesToShow);
        return () => window.removeEventListener('resize', updateImagesToShow);
    }, []);

    // Duplicate images for seamless sliding
    const duplicatedImages = [
        ...momentImages,
        ...momentImages,
    ];

    const getDisplayedImages = () => {
        const startIndex = Math.max(0, currentIndex - imagesToShow);
        const endIndex = startIndex + imagesToShow + imagesToShow - 1;
        return duplicatedImages.slice(startIndex, endIndex);
    };

    const displayedImages = getDisplayedImages();

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="mb-12 text-center text-lg text-black">
                    {language === 'EN' ? (
                        <>
                            <h2 className="text-lg lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto" style={{ width: '50%' }}>
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

                {/* Gallery and Navigation */}
                <div className="relative overflow-hidden">
                    <button
                        onClick={prevMoment}
                        className="flex items-center justify-center text-black text-2xl focus:outline-none p-2 rounded-full  hover:bg-gray-200 transition-colors duration-300 absolute left-0 z-20 top-1/2 transform -translate-y-1/2"
                    >
                        &#8592;
                    </button>

                    <div
                        className="flex transition-transform duration-500 ease-in-out will-change-transform"
                        style={{ transform: `translateX(-${(currentIndex * (100 / imagesToShow))}%)` }}
                    >
                        {duplicatedImages.map((image, index) => (
                            <div
                                key={index}
                                className={`w-full flex-shrink-0 ${imagesToShow === 1 ? 'w-full' : 'w-full md:w-1/2 lg:w-1/3'} relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110`}
                                onClick={() => handleImageClick(image)}
                                style={{ willChange: 'transform' }}
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

                    <button
                        onClick={nextMoment}
                        className="flex items-center justify-center text-black text-2xl focus:outline-none p-2 rounded-full  hover:bg-gray-200 transition-colors duration-300 absolute right-0 z-20 top-1/2 transform -translate-y-1/2"
                    >
                        &#8594;
                    </button>
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
