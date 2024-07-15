import React from 'react';
import JulyPoster from '../assets/images/JulyEvent.jpg';
import Calender from '../assets/images/calender.png';



const Announcement = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <br /><br />
            <p className="text-center text-white text-lg italic w-full lg:w-1/2 mx-auto">
                <span className="text-1xl lg:text-4xl font-bold bg-red-700 p-4 block rounded-l-full rounded-r-full mx-auto">
                    Major Events Coming Up!
                </span>  <br />
            </p>
            <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                <img src={JulyPoster} alt="JultPoster" className="w-3/4 lg:w-2/3 h-auto rounded-lg" />

            </div>
            {/* Calender */}
            <div className="relative h-128 overflow-hidden ">
                <br /><br />
                <p className="text-center text-orange-600 text-lg italic w-full lg:w-2/3 mx-auto">

                    <span className="text-1xl lg:text-4xl font-bold bg-white p-4 block rounded-l-full rounded-r-full mx-auto">
                        Calender
                    </span>  <br /><br />
                </p>
                <img src={Calender} alt="Calender" className="w-full lg:w-2/3 mx-auto rounded-lg" />

            </div>
        </div>
    );
};

export default Announcement;