// src/components/Programs.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import WaiverForm from "./sections/WaiverForm";

import english from '../assets/images/program_images/english.PNG';
import chinese from '../assets/images/program_images/chinese.PNG';



const Programs = () => {
    const { language, toggleLanguage } = useLanguage();

    const handleJoinUsClick = () => {
        window.open("https://icereg.ca/#!/events/legendary-speed-skating-club-2025-2026", "_blank");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen mt-24">


            <div className="max-w-3xl mx-auto my-4">
                <img
                    src={language === 'EN' ? english : chinese}
                    alt="Program Fees"
                    className="w-full h-auto object-contain"
                />
            </div>
            <section className="px-4 py-10 bg-gray-100">

                {/* Waiver Form Section */}
                <WaiverForm />
            </section>

            <div className="max-w-3xl mx-auto text-left p-4 w-full h-auto text-black justify-center items-center">
                {language === 'EN' ? (
                    <>

                        <h1 className="text-lg md:text-2xl lg:text-4xl mb-4 font-bold bg-white text-center text-orange-600 
                        p-4 block rounded-full">
                            Our Programs</h1>

                        <span className="text-xs lg:text-1xl md:text-lg">

                            To reach us please fill up the join us form with email, name, phone, and a message for
                            any program you are interested to join.
                            No money will be handled on this website. All transactions will be done
                            either face to face, via e-transfer, or WeChat.
                            <br /> <br />
                            Feel free to contact us for any inquiries!
                        </span>
                    </>

                ) : (
                    <>
                        <h1 className="text-lg md:text-2xl lg:text-4xl mb-4 font-bold bg-white text-center 
                        text-orange-600 p-4 block rounded-full">
                            我们的项目</h1>
                        <span className="text-xs lg:text-1xl md:text-lg">

                            想要联系我们，请填写加入我们的表格，包括电子邮件、姓名、电话和您感兴趣的项目的留言。这个网站上不会处理任何资金。所有交易都将面对面、通过电子转账或微信完成。
                            <br /> <br />
                            如有任何疑问，请随时联系我们！
                        </span>
                    </>
                )}
                <div className="lg:max-w-4xl mx-auto px-4 py-8 text-center ">
                    <button
                        onClick={handleJoinUsClick}
                        className="bg-orange-400 text-white text-sm lg:text-3xl mt-6 font-bold py-2 px-4 md:py-4 md:px-8 lg:py-8 lg:px-14 
                        rounded-full hover:bg-white hover:text-orange-600"
                    >
                        {language === 'EN' ? (
                            <>
                                Join Us！
                            </>
                        ) : (
                            <>
                                加入我们吧！
                            </>
                        )}
                    </button>
                </div>
            </div>



        </div>


    );
};

export default Programs;