// src/components/Contact.jsx
import React, { useEffect } from 'react';
import JoinUs from './sections/JoinUs.jsx'
import { useLanguage } from '../context/LanguageContext.jsx';



const Contact = () => {
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="lg:max-w-3xl mx-auto px-2 py-8 mt-28 items-center justify-center ">
            <h1 className="text-4xl mb-4 font-bold bg-white text-center text-orange-600 p-4 block rounded-full">
                {language === 'EN' ? (
                    <>
                        Contact Us
                    </>
                ) : (
                    <>
                        联系我们
                    </>
                )}
            </h1>



            <div className="flex flex-col bg-blue-100 p-8 md:max-w-lg lg:max-w-xl mx-auto rounded-lg shadow-md mt-4">
                <div className="mb-4">
                    <h2 className="text-lg text-center font-bold">
                        {language === 'EN' ? (
                            <>
                                Head Manager                    </>
                        ) : (
                            <>
                                主管
                            </>
                        )}
                    </h2>
                    <br />
                    <h3 className="text-center font-bold">Cindy Luo</h3>
                    <br /><br />
                    {language === 'EN' ? (
                        <>
                            <p>Email: legendarywintersports@outlook.com</p>
                            <br />
                            <p>Phone: +1(825)-882-0688</p>
                            <br />

                            <p>
                                Cindy is our head manager! She graduated with a Master of Education from the University of Calgary and received her
                                Bachelor’s degree in Art Education from Minzu University of China.
                            </p>
                            <br />
                            <p>She will answer any and all of your questions.</p>
                        </>
                    ) : (
                        <>
                            <p>电子邮箱: legendarywintersports@outlook.com</p>
                            <br />
                            <p>电话号码: +1(825)-882-0688</p>
                            <br />
                            <p>
                                Cindy毕业于卡尔加里大学教育学研究生院， 本科毕业于中央民族大学艺术教育学。 多年来致力于青少年文体教育，
                                人员发展及培训等，有10余年的团队管理和运营经验。
                            </p>


                        </>
                    )}

                    <br /><br />
                    <p className="text-sm text-gray-600">
                        {language === 'EN' ? (
                            <>
                                Feel free to contact us for any inquiries!               </>
                        ) : (
                            <>
                                如有任何疑问，请随时联系我们！

                            </>
                        )}
                    </p>
                </div>


            </div>



            {/* Join us section*/}
            <JoinUs />

        </div>
    );
};

export default Contact;