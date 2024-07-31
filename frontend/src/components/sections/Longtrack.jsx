import React from 'react';
import image3 from '../../assets/images/image3.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';


const ImageSection = () => {


    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center ">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 flex items-center justify-center ">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg " />
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-1/2 py-6 md:px-6 md:py-6 lg:px-12 text-center bg-opacity-75 text-black">
                {language === 'EN' ? (
                    <>
                        <p className="text-center lg:text-lg ">
                            <span className="text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                                Fun Fact!
                            </span>
                            <span className="text left lg:text-2xl text-1xl">
                                Long-track speedskating, commonly referred to as "speedskating" focuses on straight-line speed and
                                endurance over long distances and has a faster pace than short-track speed-skating.
                                <br /><br />
                                Long track offers opportunities for personal growth and achievement, as skaters strive to improve their performance.
                                If you enjoy working on your personal growth as a skater and enjoy pushing yourself to skate faster and faster,
                                or you’re interested in the power and speed of skating a larger track, consider long track!
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-center lg:text-lg ">
                            <span className="text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                                Fun Fact!
                            </span>

                            <span className="text left lg:text-2xl text-1xl">
                                速度滑冰，俗称"大道速滑"，注重长距商直线速度和耐力，比矩道速滑具有更快的速度。滑冰运动员围绕较大的箱园形跑道进行比赛，
                                每國长 400米，在整个比赛过程中需要精确的技术、姿势和耐力。
                                <br /><br />
                                在比赛中，滑冰运动员与时间竞争，以从其他参赛者中获得最快的时间，
                                而不是竞争第一个冲过终点线。速度滑冰为个人成长和成就提供了机会，因为滑冰运动员努力提高自己的表现井在不同距离上取得最佳成绩。
                                如果您喜欢在耐力方面实现个人成长，井喜欢推动自己滑得越来越快，或者您对在更大的赛道上滑冰所带来的力量和速度感兴趣，请考思速度滑冰！
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageSection;
