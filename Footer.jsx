import React from 'react';

function Footer() {
    return (
        <div className="max-w-[1250px] mx-auto p-10 md:p-20">
            <p className="text-center text-3xl md:text-4xl lg:text-5xl mt-10 mb-3">We Are Established In</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
                <div className="text-center mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">Indore, India</h1>
                    <p className="text-sm md:text-base lg:text-lg font-semibold mt-5">info.indore@infotrainindia.com</p>
                    <p className="text-base md:text-lg lg:text-xl font-semibold mt-10">+91 7067994744</p>
                    <p className="text-sm md:text-base lg:text-lg mt-10">401/206 sky residency, rani baag main, khandwa road Indore, Madhya Pradesh</p>
                </div>
                <div className="text-center mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">Bengaluru, India</h1>
                    <p className="text-sm md:text-base lg:text-lg font-semibold mt-5">info.bglr@infotrainindia.com</p>
                    <p className="text-base md:text-lg lg:text-xl font-semibold mt-10">+91 7470391093</p>
                    <p className="text-sm md:text-base lg:text-lg mt-10">Bannargatta road near meenakshi mall banglore: 560076</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

