// src/components/Programs.jsx
import React, { useEffect } from 'react';

import PrivateSessionImage from '../assets/program_images/1v1Private.png';
import ProgramsImage from '../assets/program_images/listProgram.png';
import newRegister from '../assets/program_images/newRegister.png';
import equipment from '../assets/program_images/equipment.png';
import deposit from '../assets/program_images/deposit.png';
import contact from '../assets/images/contact2.png';
import QrCode from '../assets/images/QRcode.png';




const Programs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen px-4">
            <div className="max-w-3xl mx-auto text-center p-4 w-full h-auto text-black justify-center items-center">
                <h1 className="text-2xl lg:text-4xl mb-4 font-bold bg-white text-center text-orange-600 p-4 block rounded-full">Our Programs</h1>
                <span className="lg:text-2xl text-1xl">
                    <br />
                    If you are interested in any of our programs,
                    please contact us, join us, or
                    scan the QR code below to join our WeChat group.
                    <br /><br />
                </span>
            </div>

            <div className="text-black">
                <div className="max-w-3xl mx-auto my-4">
                    <p className="mb-4">
                        <span className="font-bold">Single pass: $650 (10 sessions)</span>
                        <ul className="list-disc list-inside">
                            <li>$65/session, minimum purchase 10 sessions</li>
                            <li>Include dry-land training and on ice skating training</li>
                            <li>Include facility fees for all the training, free skate shoes rent, security deposit $300*</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">Monthly pass: $550</span>
                        <ul className="list-disc list-inside">
                            <li>2-3 training sessions per week / 9-12 sessions in total**</li>
                            <li>Include dry-land training and on ice skating training</li>
                            <li>Include facility fees, free skate shoes rent, security deposit $300*</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">Quarterly pass: $1500</span>
                        <ul className="list-disc list-inside">
                            <li>3 months, 2-3 training sessions per week / 28-36 sessions in total**</li>
                            <li>Include dry-land training and on ice skating training</li>
                            <li>Include facility fees, free skate shoes rent, security deposit $300*</li>
                            <li>Free club helmet as sign up gift</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">Yearly pass: $3500</span>
                        <ul className="list-disc list-inside">
                            <li>September to March, 2-3 training sessions per week**</li>
                            <li>Include dry-land training and on ice skating training</li>
                            <li>Include facility fees, free skate shoes, security deposit $300*</li>
                            <li>Free club helmet + club skate suit as sign up gift</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">1V1 private session: $150/hr</span>
                        <ul className="list-disc list-inside">
                            <li>Student choice of dry-land training or on ice skating training</li>
                            <li>Only the Coach fee, not including the facility fees</li>
                            <li>Free skate shoes rent, no deposit fee needed</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">New students register: $20</span>
                        <ul className="list-disc list-inside">
                            <li>Include Welcome Package + 1 free trial + Head Coach Consultation</li>
                            <li>Include facility fees, free skate shoes rent, no deposit fee needed</li>
                        </ul>
                    </p>

                    <p className="mb-4">
                        <span className="font-bold">Available equipment to purchase:</span>
                        <ul className="list-disc list-inside">
                            <li>Protection package $80 (include cut-proof gloves, cut-proof neck guard, cut-proof ankle guard)</li>
                            <li>High performance short track speed skates $650</li>
                            <li>Club helmet $100</li>
                            <li>Club Skating Suit $100</li>
                        </ul>
                    </p>

                    <p className="text-xs text-gray-400 mt-4">
                        *Security deposit for equipment is used to cover the cost of skate shoes and blades in the event of loss and damage. Full deposit will be refunded upon return of skate shoes, blades, and skate guards in their original condition. Normal wear and tear will not result in deduction of deposit.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto text-center p-4 w-full h-auto text-black justify-center items-center mt-4">
                <span className="lg:text-2xl text-1xl">
                    No money will be handled on this website. All transactions will be done
                    either face to face, via e-transfer, or WeChat.
                    <br /><br />
                    Feel free to contact us for any inquiries!
                </span>
            </div>

            <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                <img src={QrCode} alt="QR Code" className="rounded-lg w-3/4 lg:w-auto h-64 object-contain" />
            </div>
        </div>


    );
};

export default Programs;