import React from 'react';
import { FaInstagram, FaDiscord, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <div className='bg-gradient-to-b from-[#FFD3B4] to-white flex flex-col justify-center items-center pb-4'>
            <div className='flex flex-col justify-center items-center w-full px-4'>
                <span className='text-2xl md:text-3xl font-bold mt-10 mb-5'>TOINGG</span>
                <span className='text-gray-500 text-base md:text-xl mb-5 text-center'>
                    We are here to grow your business <span className='text-red-500'>❤</span>
                </span>
                <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 md:gap-10 mb-5'>
                    <a href="https://www.toingg.com/docs/intro" className='text-sm md:text-base'>Terms and Conditions</a>
                    <a href="https://www.toingg.com/docs/intro" className='text-sm md:text-base'>Privacy Policy</a>
                    <a href="https://www.toingg.com/docs/intro" className='text-sm md:text-base'>Contact</a>
                    <a href="https://www.toingg.com/docs/intro" className='text-sm md:text-base'>API docs</a>
                    <a href="https://www.toingg.com/docs/intro" className='text-sm md:text-base'>Refund Policy</a>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center w-full md:gap-10 text-center'>
                    <span className='text-sm md:text-base mb-3 md:mb-0'>
                        Copyright © 2024 Toingg, All rights reserved.
                    </span>
                    <div className='flex flex-row gap-3'>
                        <a href="https://www.toingg.com/docs/intro" className='text-lg'><FaInstagram /></a>
                        <a href="https://discord.com/invite/ghsS3z9N" className='text-lg'><FaDiscord /></a>
                        <a href="https://www.linkedin.com/company/toingg/" className='text-lg'><FaLinkedinIn /></a>
                        <a href="https://x.com/Toingg_AI" className='text-lg'><FaXTwitter /></a>
                        <a href="https://www.youtube.com/channel/UCBOCtGxOObPsa-za0mFKxcg" className='text-lg'><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
