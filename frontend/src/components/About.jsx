// src/components/About.jsx
import React, { useState, useEffect } from 'react';
import YinQi from '../assets/images/bios/QinYin.jpg';
import winner from '../assets/images/bios/Winner.png';
import Daria from '../assets/images/bios/Daria.jpg';
import Rachel from '../assets/images/bios/Rachel.png';
import Joy from '../assets/images/bios/Joy.jpg';

import logo1 from '../assets/images/Logo1.jpg';
import ImageSection1 from './sections/Longtrack.jsx';

import { useLanguage } from '../context/LanguageContext.jsx';




const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const redirectToWikipedia = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Yin_Qi_(speed_skater)';
    };

    const linkStyle = {
        cursor: 'pointer',
        color: 'orange',
    };

    const hoverStyle = {
        textDecoration: 'underline',
        color: 'darkblue',
    };

    const { language, toggleLanguage } = useLanguage();

    const images = [YinQi, winner]; // Array of images to switch between
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center p-10 mt-28">
            <div className="flex flex-col md:flex-row text-left px-1 md:px-16 py-8">
                {/* text on the left */}
                <div className="w-full lg:w-2/3 p-8 bg-opacity-75 text-black">
                    {language === 'EN' ? (
                        <>
                            <p className="text-left ">
                                <br />
                                <span className="w-full text-center text-lg md:text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                                    Legendary Winter Sports Club
                                </span>
                                <br /><br />
                                <span className="text-sm md:text-1xl lg:text-2xl">
                                    The mission of Legendary Winter Sports Club is to inspire the next generation of children aged 4-17 with the joy and beauty of skating.
                                    Based in Calgary, Alberta, our club is home to an incredible community of passionate skaters and dedicated coaches.
                                    <br />  <br />
                                    We are committed to providing students with the highest quality training and fostering their passion for skating.
                                    Through our dedicated efforts, we hope to see these children compete in Alberta's speed skating competitions, national competitions showcasing their talents and passion for the sport.
                                    <br />  <br />
                                    Our ultimate goal is to support the development of future Canadian speed skaters,
                                    contributing to the national team by producing more outstanding athletes. We are committed to excellence
                                    and hope to become a significant contributor to the growth and success of speed skating in Canada.
                                    <br /><br />
                                </span>
                                <br />
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-leftg">
                                <br />
                                <span className="w-full text-center text-lg md:text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                                    传琦冰雪俱乐部
                                </span>
                                <br /><br />
                                <span className="text-sm md:text-1xl lg:text-2xl">
                                    传琦冰雪俱乐部的使命是激发4-17岁的儿童和青少年对滑冰的热爱。
                                    传琦冰雪俱乐部致力于为学生提供最高质量的训练，并培养和激发他们对滑冰的热情。我们期待看到孩子们通过他们自身的努力在阿尔伯塔省的速度滑冰比赛和全国比赛中充分展示他们的最高水平和对滑冰的热爱。
                                    <br />  <br />
                                    我们的终极目标是促进加拿大速滑运动的发展，同时为国家队培养后续中坚力量；并持续输出更多优秀运动员。我们致力于成为加拿大速度滑冰的重要贡献者。
                                    <br /><br />
                                </span>
                                <br />
                            </p>
                        </>
                    )}
                </div>

                {/* Image on the right */}
                <div className="md:w-1/3 lg:w-1/3 flex items-center justify-center">
                    <img src={logo1} alt="Encouragement" className="w-72 h-72 object-cover rounded-lg" />
                </div>
            </div>
            <div className="relative bg-opacity-75 text-center text-black py-8 flex-grow">
                {language === 'EN' ? (
                    <>
                        <span className="w-full lg:w-3/4 text-lg md:text-2xl lg:text-5xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto text-center">
                            Meet our Coaches!
                        </span><br /><br />
                    </>
                ) : (
                    <>
                        <span className="w-full lg:w-3/4 text-lg md:text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto text-center">
                            认识一下我们的教练
                        </span><br /><br />
                    </>
                )}
                <div className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 md:py-8 ">
                    <div className="md:w-1/2 lg:w-1/4 custom-lg:w-1/3 custom-lg:h-2/3 flex items-center justify-center">
                        <img src={images[currentImageIndex]} alt="YinQi" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="lg:w-3/4 custom-lg:w-2/3 md:w-1/2 flex py-6 md:px-2 md:py-6 lg:px-12 flex flex-col items-center md:items-start">
                        {language === 'EN' ? (
                            <>
                                <p className="text-left">
                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 px -4 py-6">
                                        Head Coach - Qi Yin
                                    </span>
                                </p>
                                <br /><br />
                                <p className="text-left">
                                    <span className="text-base md:text-1xl lg:text-2xl">
                                        Meet our Head Coach Qi Yin! Graduated from Harbin Sport University majoring in Sports Training.
                                        From 2015 to 2018, she was a member of the China National Short Track Speed Skating Team and continued her career
                                        from 2018 to 2022 with the China National Speed Skating Team.
                                        <br /> <br />
                                        Qi Yin is a decorated athlete with achievements
                                        including multiple Short Track Speed Skating World Cup Silver Medals and victories in national championships.
                                        <br /><br />
                                        She represented China in the 2022 Beijing Winter Olympics and excelled at the 14th National Winter Games of PRC in 2024,
                                        winning the Champion of 1,000 meters speed skating, the Silver Medal of Mass start final, and the Silver Medal of 1500 meters.
                                        With over 21 years of skating experience, Qi Yin offers unparalleled guidance and mentorship as our Head Coach.
                                        <br /><br />
                                        The profile of the head coach can be viewed on Baidu Baike and <br />
                                        <span className="text-1xl lg:text-2xl "
                                            style={linkStyle}
                                            onClick={redirectToWikipedia}
                                            onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                        >
                                            Wikipedia.
                                        </span>
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-center">
                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        主教练 - 殷琦
                                    </span>
                                </p>
                                <br /><br />

                                <p className="text-left">

                                    <span className="text-base md:text-1xl lg:text-2xl">
                                        我们的主教练殷琦是一名拥有21年滑冰经验的国际级运动员。毕业于哈尔滨体育学院运动训练专业。她曾分别是短道速滑中国国家队运动员（2015-2018）
                                        和速度滑冰中国国家队运动员（2018-2022）。
                                        <br /><br />
                                        殷琦是一名获得多项荣誉的运动员，包括多次获得短道速滑世界杯银牌和全国冠军。
                                        2022年，她参加了北京冬季奥运会，并在2024年第十四届全国冬季运动会上表现出色，获得速度滑冰1000米冠军、集体出发决赛亚军和1500米亚军。
                                        殷琦作为我们的主教练，提供无与伦比的指导和指导。
                                        <br /><br />
                                        主教练资料可在百度百科及
                                        <span className="text-base md:text-1xl lg:text-2xl"
                                            style={linkStyle}
                                            onClick={redirectToWikipedia}
                                            onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                        >
                                            Wikipedia
                                        </span>查看。
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <br />
                <div className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 md:py-8 ">
                    <div className="md:w-1/2 lg:w-1/4 custom-lg:w-1/3 custom-lg:h-2/3 flex items-center justify-center">
                        <img src={Rachel} alt="Rachel" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="lg:w-3/4 custom-lg:w-2/3 flex py-6 md:px-6 md:py-6 lg:px-12 flex flex-col items-center md:items-start">
                        {language === 'EN' ? (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        Assistant Coach - Rachel Mallard
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">
                                        Rachel Mallard is a long track speed skater from Ottawa, Ontario. She trained in Ottawa for ten years
                                        before moving to Calgary to train at the Olympic Oval in the Elite Athlete Pathway, and to study neuroscience
                                        at the University of Calgary.
                                        <br /> <br />
                                        She is now a Stage 3 athlete in her third year with the program, and is specializing in middle and long distance races.  <br />
                                        Over the last two years with the program, Rachel has been a medalist at the Canadian junior championships and the Canada Winter Games,
                                        and is now working towards improving her Canadian ranking as a senior skater.
                                        <br /> <br />
                                        Working with Legendary Winter Sports has been an incredible opportunity to enhance her coaching skills,
                                        work with motivated athletes, and hopefully pass on her love for the sport to the next generation!

                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        助理教练 - Rachel Mallard
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">

                                        Rachel Mallard是来自安大略省渥太华的长道速滑运动员。她在渥太华训练了十年后，搬到卡尔加里在精英运动员发展计划中训练，并在卡尔加里大学学习神经科学。
                                        她目前是该项目的第三阶段运动员，已经在该项目中训练了三年，专攻中长距离比赛。
                                        <br /> <br />
                                        在过去的两年里，Rachel 在加拿大青少年锦标赛和加拿大冬季运动会上获得了奖牌，
                                        现在她正致力于提高她作为成年运动员的加拿大排名。与传奇冬季运动俱乐部合作是一个令人难以置信的机会，可以提升她的教练技能，与有动力的运动员合作，
                                        并希望将她对这项运动的热爱传递给下一代！
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <br />
                <div className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 md:py-8 ">
                    <div className="md:w-1/2 lg:w-1/4 custom-lg:w-1/3 custom-lg:h-2/3 flex items-center justify-center">
                        <img src={Daria} alt="Daria" className="w-full h-auto rounded-lg" />

                    </div>
                    <div className="lg:w-3/4 custom-lg:w-2/3 flex py-6 md:px-6 md:py-6 lg:px-12 flex flex-col items-center md:items-start">
                        {language === 'EN' ? (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        Assistant Coach -  Daria Vogt
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">
                                        Daria Vogt is from Ottawa, Ontario and have been speed skating for about 14 years.
                                        This is her third-year training with the Olympic Oval in long track speed skating,
                                        also her third year studying Exercise and Health Physiology at the University of Calgary!
                                        <br /> <br />
                                        Daria is our level 1 Kick Start Assistant Coach, she has rich experience in sports camp with children,
                                        very patient and good with kids who never Skate before.
                                        She is very excited to share her knowledge and to give back to the skating community!
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        助理教练 - Daria Vogt
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">

                                        达莉亚·沃特（Daria Vogt）来自安大略省渥太华，她已经从事速滑大约14年了。这是她在奥林匹克椭圆形冰场进行长道速滑训练的第三年，也是她在卡尔加里大学学习运动与健康生理学的第三年！
                                        <br /><br />
                                        达莉亚是我们的一级启动助理教练，她在儿童体育营中拥有丰富的经验，对从未滑冰过的孩子非常有耐心并且很擅长与他们相处。她非常兴奋能够分享她的知识，并回馈滑冰社区！
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <br />
                <div className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 md:py-8 ">
                    <div className="md:w-1/2 lg:w-1/4 custom-lg:w-1/3 custom-lg:h-2/3 flex items-center justify-center">
                        <img src={Joy} alt="YinQi" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="lg:w-3/4 custom-lg:w-2/3 flex py-6 md:px-6 md:py-6 lg:px-12 flex flex-col items-center md:items-start">
                        {language === 'EN' ? (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        Club Assistant - Joy Zhang
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">
                                        Joy is a Club Assistant at Legendary Winter Sports, teaching level one beginner speed skaters.
                                        Offering several years of previous skating experience and a comprehensive knowledge of speed skating,
                                        Joy is committed to providing proper speed skating education and an exemplary experience for all students at Legendary.
                                        <br /> <br />
                                        She has previous experience in leadership roles, working with children, and teaching,
                                        as well as a background working in athletic environments, making her a patient and dedicated assistant coach.
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className=" ">

                                    <span className="text-lg md:text-2xl lg:text-4xl font-bold  text-orange-600 py-6">
                                        Club Assistant - Joy Zhang
                                    </span><br /><br />
                                    <span className="text-base md:text-1xl lg:text-2xl">

                                        Joy是传奇冬季运动俱乐部的一名助理教练，教授一级初学者速滑。她拥有多年的滑冰经验和全面的速滑知识，致力于为传奇俱乐部的所有学生提供正确的速滑教育和卓越的体验。
                                        <br /> <br />
                                        她曾担任领导角色，拥有与儿童一起工作的经验和教学经验，以及在体育环境中的工作背景，这使她成为一名耐心且敬业的助理教练。
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;