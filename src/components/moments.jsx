import React from 'react';
import momentImage1 from '../assets/moments1.jpg'; // Adjust paths as necessary
import momentImage2 from '../assets/image2.jpg';
import momentImage3 from '../assets/moments3.jpg';

const Moments = () => {
    return (
        <section className="bg-orange-500 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Moments</h2>
                    <p className="text-gray-600">Explore some memorable moments from our club.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Moment 1 */}
                    <div className="relative">
                        <img src={momentImage1} alt="Moment 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-white">Winter Tournament 2023</h3>
                                <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                    {/* Moment 2 */}
                    <div className="relative">
                        <img src={momentImage2} alt="Moment 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-white">Skiing Workshop</h3>
                                <p className="text-white text-sm">Nulla quis lorem ut libero malesuada feugiat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Moment 3*/}
                    <div className="relative">
                        <img src={momentImage3} alt="Moment 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-white">Skiing Workshop</h3>
                                <p className="text-white text-sm">Nulla quis lorem ut libero malesuada feugiat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Moments;