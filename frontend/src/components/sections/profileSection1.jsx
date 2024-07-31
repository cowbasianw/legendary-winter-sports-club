// components/profileSection.jsx

import React from 'react';
import profile1 from '../../assets/images/bios/Winner.jpg';

import { useLanguage } from '../../context/LanguageContext.jsx';


const profileSection = ({ image, text }) => {

    const { language, toggleLanguage } = useLanguage();

    const redirectToWikipedia = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Yin_Qi_(speed_skater)';
    };

    const linkStyle = {
        cursor: 'pointer',

        color: 'white',
    };

    const hoverStyle = {
        textDecoration: 'underline',
        color: 'darkblue',
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center px-2 lg:px-16 py-2">
                <div className="w-full md:w-1/2 flex items-center justify-center mb-2 md:mb-0">
                    {language === 'EN' ? (
                        <>
                            <p className="text-center text-lg italic">
                                <span className="text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                    Meet our head Coach!
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-left text-lg italic">
                                <span className="text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                    Meet our head Coach!
                                </span>
                            </p>
                        </>
                    )}
                </div>
                <div className="w-full md:w-1/2 flex text-left lg:px-8">
                    {language === 'EN' ? (
                        <>
                            <p className="text-left text-lg italic">
                                <span
                                    className="text-2xl lg:text-4xl font-bold bg-orange-600 font-bold py-2 px-8 rounded-full hover:bg-blue-700"
                                    style={linkStyle}
                                    onClick={redirectToWikipedia}
                                    onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                >
                                    Yin Qi
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-left text-lg italic">
                                <span
                                    className="text-2xl lg:text-4xl font-bold bg-orange-600 font-bold py-2 px-8 rounded-full hover:bg-blue-700"
                                    style={linkStyle}
                                    onClick={redirectToWikipedia}
                                    onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                >
                                    殷琦
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 lg:px-8 py-8">

                {/* Image on the left */}
                <div className="w-full md:w-1/2 flex items-center justify-center mb-0 md:mb-2">
                    <img src={profile1} alt="profile main" className="w-full h-auto rounded-lg mx-auto border-8 border-white" /> {/* Added mx-auto to center the image */}
                </div>

                {/* Text on the right */}
                <div className="w-full md:w-1/2 p-2 bg-opacity-75 text-blac mb-0 md:mb-2 lg:mb-4 lg:px-8">
                    {language === 'EN' ? (
                        <>
                            <p className="text-left text-lg italic">

                                <span className="text-1xl lg:text-2xl lg:font-bold" >
                                    Graduated from Harbin Sport University majoring in Sports Training.
                                    <br /><br />
                                    A Regular competitor in various international competitions, including ISU Speed Skating World Cups.
                                </span><br /><br />
                                <span className="text-1xl lg:text-2xl">
                                    Participated the 14th National Winter Games of PRC, won the Champion of 1,000 meters speed skating; won the Sliver Metal of Mass start final;
                                    won the Sliver Metal of 1500 meters; won the bronze Medal of team pursue.
                                    <br /><br />
                                    The head coach’s information can be viewed on Baidu baike and Wikipedia.
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-left text-lg italic">

                                <span className="text-1xl lg:text-2xl lg:font-bold" >
                                    毕业于哈尔滨体育学院运动训练专业。
                                    <br /><br />
                                    短道速滑世界亚军，多次获得短道速滑全国冠军，速度滑冰全国冠军。
                                </span><br /><br />
                                <span className="text-1xl lg:text-2xl">
                                    2024年，殷琦获得第十四届全国冬季运动会速度滑冰项目1000米冠军；集体出发决赛亚军; 1500米亚军; 团体追逐季军。
                                    <br /><br />
                                    主教练资料可在百度百科及Wikipedia查看。
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default profileSection;
