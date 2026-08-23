import { useState, useEffect } from 'react';


import Augest2025Calender from '../assets/images/calenders/25_augest.png';
import AugustPoster from '../assets/images/events/AugustEvent.jpg';
import JulyPoster from '../assets/images/events/July_2025_event.jpg';
import Augest2025Poster from '../assets/images/events/Augest_2025_Event.jpg';


import { useLanguage } from '../context/LanguageContext.jsx';

// Slider Component with horizontal sliding
const Slider = ({ images, autoSlide = false, slideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false); // To disable buttons during sliding

    // Handle Next Slide
    const handleNext = () => {
        if (!isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsSliding(false);
            }, 500); // Time should match transition duration
        }
    };

    // Handle Previous Slide
    const handlePrevious = () => {
        if (!isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                setIsSliding(false);
            }, 500);
        }
    };

    // Auto-Slide
    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(handleNext, slideInterval);
            return () => clearInterval(interval); // Clear interval on component unmount
        }
    }, [currentIndex, autoSlide, slideInterval]);

    return (
        <div className="relative max-w-6xl mx-auto flex items-center justify-center mt-4 overflow-hidden">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={isSliding}
                className="sm:text-sm lg:text-2xl lg:px-4 p-2 focus:outline-none rounded-full hover:bg-gray-200 transition-colors duration-300 absolute left-0 z-10"
            >
                &#8592;
            </button>

            {/* Image Wrapper */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0"
                    />
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={isSliding}
                className="sm:text-sm lg:text-2xl lg:px-4 p-2 focus:outline-none rounded-full hover:bg-gray-200 transition-colors duration-300 absolute right-0 z-10"
            >
                &#8594;
            </button>
        </div>
    );
};

// Announcement Component
const Announcement = () => {
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const eventImages = [Augest2025Poster, AugustPoster, JulyPoster];
    const calendarImages = [


        Augest2025Calender
    ];

    return (
        <div className="flex flex-col min-h-screen mt-28">
            {/* Calendar Section */}
            <br /><br />
            <p className="text-center text-orange-600 text-lg w-full lg:w-2/3 mx-auto">
                <span className="text-1xl lg:text-4xl font-bold bg-white p-4 block rounded-l-full rounded-r-full mx-auto">
                    {language === 'EN' ? 'Calendar' : '课程表'}
                </span>
                <br />
            </p>
            <Slider images={calendarImages} autoSlide={true} slideInterval={5000} className="max-w-5xl mx-auto" />

            {/* Major Events Section */}
            <p className="text-center text-red-700 text-lg w-full lg:w-1/2 mx-auto">
                <br /><br />
                <span className="text-1xl lg:text-4xl font-bold p-4 block rounded-l-full rounded-r-full mx-auto">
                    {language === 'EN' ? 'Major Events!' : '重大事件'}
                </span>
                <br />
            </p>
            <Slider images={eventImages} />
        </div>
    );
};

export default Announcement;
