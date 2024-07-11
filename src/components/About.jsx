// src/components/About.jsx
import React from 'react';
import intro1 from '../assets/intro1.jpg';
import logo1 from '../assets/images/logo1.jpg';



const About = () => {
    return (
        <div className="text-center italic p-10 ">
            <div className="flex items-center justify-center px-16 ">
                {/* Image on the left */}
                <div className="w-3/4 p-8 text-center bg-opacity-75 text-white ">
                    <p className="text-center text-lg italic">
                        <br />
                        <span className="text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full" >
                            Legendary Winter Sports Club
                        </span><br /><br />
                        <span className="text-2xl">
                            Founded in May 2024, the mission of Legendary Winter Sports Club is to inspire the next generation of children, teenagers, and adults with the joy and beauty of skating.
                            Based in Calgary, Alberta, our club is home to an incredible community of passionate skaters and dedicated coaches.
                            <br />  <br />
                            Our club is committed not only to teaching the fundamentals and excitement of the sport
                            but also to cultivating elite skaters who can compete at the highest levels.
                            <br />  <br />
                            At Legendary Winter Sports Club, we believe in the power of perseverance, discipline, and teamwork.
                            Our members are encouraged to strive for excellence, both on and off the ice.
                            As one of our coaches says,   <br />  <br />
                            "Skating is not just about the medals; it's about the journey, the friendships, and the life lessons learned along the way."

                            <br /><br />
                        </span><br />
                    </p>
                </div>

                {/* Text on the right */}
                <div className="w-1/4 flex items-center justify-center">
                    <img src={logo1} alt="Encouragement" className="w-full h-auto " />
                </div>
            </div>
            <div className="relative bg-opacity-75 text-white py-8 flex-grow">
                <span className="text-2xl">
                    Our Head Coach Qi Yin is an international athlete with 21 years of skating experience. <br />
                    she was a member of the Chinese national team for short track speed skating and speed skating. <br />
                    She also represented China in the speed skating event at the 2022 Beijing Winter Olympics. <br />
                    Our club offers unparalleled guidance and mentorship. <br />
                </span>
                <br />
            </div>


        </div>

    );
};

export default About;