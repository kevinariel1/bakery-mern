import React from 'react';
import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud2.png';
import cloud3 from '../../assets/cloud3.png';
import cloud4 from '../../assets/cloud4.png';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4" style={{ backgroundColor: '#C2893A' }}>

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Now use the 'cloud1' variable as the src */}
                <img src={cloud1} className="absolute top-[5%] left-[5%] w-64 opacity-80" alt="Cloud" />
                <img src={cloud2} className="absolute top-[15%] right-[10%] w-80 opacity-60 scale-x-[-1]" alt="Cloud" />
                <img src={cloud4} className="absolute bottom-[-5%] left-[20%] w-100 opacity-40" alt="Cloud" />
            </div>

            {/* Main Container */}
            <div className="relative z-10 flex w-full max-w-5xl h-150 bg-white rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                {/* Left Side: Branding (Color FFB246) */}
                <div className="hidden md:flex md:w-1/2 relative items-center justify-center p-12 overflow-hidden" style={{ backgroundColor: '#FFB246' }}>
                    {/* Subtle Cloud inside the card */}
                    <img src={cloud2} className="absolute top-[10%] right-[-10%] w-64 opacity-20 brightness-200" alt="" />
                    <img src={cloud2} className="absolute top-[80%] left-[-10%] w-64 opacity-20 brightness-200" alt="" />

                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase italic leading-none">
                            Cloud <br /> <span className="text-white drop-shadow-md">Bakery</span>
                        </h1>
                        <div className="h-1 w-20 bg-[#5D4037] mx-auto mb-6 rounded-full opacity-30"></div>

                        {/* Main Floating Icon */}
                        <div className="mt-10 p-10 rounded-full">
                            <img src={cloud4} className="w-32 mx-auto animate-bounce" alt="Cloud Icon" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Area */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-20 bg-white">
                    <div className="w-full max-w-sm mx-auto">
                        <header className="mb-10 text-center md:text-left">
                            <h2 className="text-4xl font-black text-[#5D4037] tracking-tight">{title}</h2>
                            <p className="text-gray-400 mt-2 font-medium">{subtitle}</p>
                        </header>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;