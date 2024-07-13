// src/components/About.jsx
import React from 'react';
import YinQi from '../assets/bios/YINQI.jpeg';
import logo1 from '../assets/images/logo1.jpg';



const About = () => {
    return (
        <div className="text-center italic p-10 ">
            <div className="flex flex-col md:flex-row items-center justify-center px-1 md:px-16 py-8 ">
                {/* text on the left */}
                <div className="w-full lg:w-3/4 p-8 lg:text-center bg-opacity-75 text-white ">
                    <p className="text-left lg:text-center lg:text-lg italic">
                        <br />
                        <span className=" w-full text-center text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full" >
                            Legendary Winter Sports Club
                        </span><br /><br />
                        <span className="text-1xl lg:text-2xl">
                            Founded in May 2024, the mission of Legendary Winter Sports Club is to inspire the next generation of children aged 4-17 with the joy and beauty of skating.
                            Based in Calgary, Alberta, our club is home to an incredible community of passionate skaters and dedicated coaches.
                            <br />  <br />
                            We are committed to providing students with the highest quality training and fostering their passion for skating.
                            Through our dedicated efforts, we hope to see these children compete in Alberta's speed skating competitions, national competitions showcasing their talents and passion for the sport.
                            <br />  <br />
                            Our ultimate goal is to support the development of future Canadian speed skaters,
                            contributing to the national team by producing more outstanding athletes. We are committed to excellence
                            and hope to become a significant contributor to the growth and success of speed skating in Canada.

                            <br /><br />
                        </span><br />
                    </p>
                </div>

                {/* Image on the right */}
                <div className="w-1/4 flex  justify-center">
                    <img src={logo1} alt="Encouragement" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="relative bg-opacity-75 text-center text-white py-8 flex-grow">
                <span className="w-full lg:w-3/4 text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto text-center">
                    Meet our Coaches!
                </span><br /><br />
                <div className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 py-8 ">
                    <div className="md:w-1/2 lg:w-1/4 flex  justify-center">
                        <img src={YinQi} alt="YinQi" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="lg:w-3/4 flex md:px-6 py-6 justify-center">

                        <p className=" italic">
                            <span className="text-2xl lg:text-4xl font-bold bg-orange-600 font-bold py-3 px-8 rounded-full">
                                Qi Yin
                            </span><br /><br /><br />

                            <span className="text-1xl lg:text-2xl">
                                Meet our Head Coach Qi Yin! Graduated from Harbin Sport University majoring in Sports Training.
                                From 2015 to 2018, she was a member of the China National Short Track Speed Skating Team and continued her career
                                from 2018 to 2022 with the China National Speed Skating Team. Qi Yin is a decorated athlete with achievements
                                including multiple Short Track Speed Skating World Cup Silver Medals and victories in national championships.
                                <br /><br />
                                She represented China in the 2022 Beijing Winter Olympics and excelled at the 14th National Winter Games of PRC in 2024,
                                winning the Champion of 1,000 meters speed skating, the Silver Medal of Mass start final, and the Silver Medal of 1500 meters.
                                With over 21 years of skating experience, Qi Yin offers unparalleled guidance and mentorship as our Head Coach.
                                <br />
                            </span>
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <div className="flex flex-col md:flex-row text-left lg:text-left px-1 md:px-16 py-8 ">
                    <p className=" ">

                        <span className="text-2xl lg:text-4xl font-bold bg-orange-600 font-bold py-3 px-8 rounded-full">
                            Rachel Mallard
                        </span><br /><br />
                        <span className="text-1xl lg:text-2xl">
                            Rachel Mallard is a long track speed skater from Ottawa, Ontario. She trained in Ottawa for ten years
                            before moving to Calgary to train at the Olympic Oval in the Elite Athlete Pathway, and to study neuroscience  <br />
                            at the University of Calgary. She is now a Stage 3 athlete in her third year with the program, and is specializing in middle and long distance races.  <br />
                            Over the last two years with the program, Rachel has been a medalist at the Canadian junior championships and the Canada Winter Games,
                            and is now working towards improving her Canadian ranking as a senior skater. Working with Legendary Winter Sports
                            has been an incredible opportunity to enhance her coaching skills, work with motivated athletes, and hopefully
                            pass on her love for the sport to the next generation!
                        </span>
                    </p>
                </div>
            </div>


        </div>

    );
};

export default About;