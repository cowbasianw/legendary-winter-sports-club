import React, { useEffect } from 'react';
import JulyPoster from '../assets/images/events/JulyEvent.jpg';
import Calender from '../assets/images/calenders/september.png';
import { useLanguage } from '../context/LanguageContext.jsx';




const Announcement = () => {
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen mt-28">
            {/* Calender */}
            <div className="relative h-128 overflow-hidden ">
                <br /><br />
                <p className="text-center text-orange-600 text-lg  w-full lg:w-2/3 mx-auto">


                    <span className="text-1xl lg:text-4xl font-bold bg-white p-4 block rounded-l-full rounded-r-full mx-auto">
                        {language === 'EN' ? (
                            <>
                                Calender
                            </>
                        ) : (
                            <>
                                课程表
                            </>
                        )}
                    </span>  <br />
                </p>
                <img src={Calender} alt="Calender" className="w-full lg:w-2/3 mx-auto rounded-lg" />
            </div>

            <p className="text-center text-red-700  text-lg  w-full lg:w-1/2 mx-auto">
                <br /><br />
                <span className="text-1xl lg:text-4xl font-bold p-4 block rounded-l-full rounded-r-full mx-auto">

                    {language === 'EN' ? (
                        <>
                            Major Events !
                        </>
                    ) : (
                        <>
                            重大事件
                        </>
                    )}
                </span>  <br />
            </p>
            <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                <img src={JulyPoster} alt="JultPoster" className="w-3/4 lg:w-2/3 h-auto rounded-lg" />

            </div>

        </div>
    );
};

export default Announcement;