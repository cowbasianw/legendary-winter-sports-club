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
        <div className="flex flex-col min-h-screen">

            <div className="max-w-3xl mx-auto text-center p-10 w-full h-auto text-white justify-center items-center">
                <h1 className="text-2xl lg:text-4xl mb-4 font-bold bg-white text-center text-orange-600 p-4 block rounded-full">Our Programs</h1>
                <span className="lg:text-2xl text-1xl">
                    <br />
                    If you are interested in any of our programs,
                    please contact us, join us, or
                    scan the QR code below to join our WeChat group.
                    <br /><br />

                </span>
            </div>

            <div className="mt-8">
                <img src={newRegister} alt="New Register" className="mx-auto mb-8 rounded-lg w-full max-w-2xl" />
                <img src={PrivateSessionImage} alt="1V1 Private Session" className="mx-auto mb-8 rounded-lg w-full max-w-2xl" />
                <img src={ProgramsImage} alt="Program Options" className="mx-auto mb-8 rounded-lg w-full max-w-2xl" />
                <img src={equipment} alt="Equipment Costs" className="mx-auto mb-8 rounded-lg w-full max-w-2xl" />
                <img src={deposit} alt="deposits" className="mx-auto mb-8 rounded-lg w-full max-w-2xl" />
            </div>
            <br />
            <div className="max-w-3xl mx-auto text-center p-10 w-full h-auto text-white justify-center items-center">
                <span className="lg:text-2xl text-1xl">
                    No money will be handled in this website. All transaction will be done
                    either face to face, e-transfer, or Wechat.
                    <br /> <br />
                    Feel free to contact us for any inquiries!
                </span>
            </div>
            <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                <img src={contact} alt="contact" className="mx-auto mb-8 rounded-lg w-2/3" />
            </div>
            <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                <img src={QrCode} alt="QrCode" className="rounded-lg w-3/4 lg:w-auto h-64 object-contain" />
            </div>

        </div>
    );
};

export default Programs;