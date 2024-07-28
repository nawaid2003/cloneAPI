import React from 'react';
import TextSlider from './TextSlider';
import { IoCall } from "react-icons/io5";

const Hero: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen px-4 md:px-0">
            <div className="w-full md:w-2/3 h-auto md:h-2/3 bg-white bg-[radial-gradient(#EBECF0_3px,#ffffff_3px)] bg-[size:40px_40px] flex flex-col md:flex-row gap-16 p-6 md:p-0">
                <div className="flex flex-col justify-center w-full md:w-1/2">
                    <div className="text-gray-500 font-medium text-2xl md:text-4xl">
                        Build AI Calling Agent that can do
                    </div>
                    <div className="flex flex-col">
                        <TextSlider />
                    </div>
                    <div className='mt-5 flex flex-col md:flex-row gap-5'>
                        <button className='bg-[#FFA96B] hover:bg-[#EA8440] text-white font-semibold py-4 px-4 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300'>
                            Build your own voice agent <span className="ml-2 text-sm font-bold text-black">'Start for free'</span>
                        </button>
                        <button className='border border-gray-400 font-bold px-4 bg-white rounded-lg hover:bg-gray-100'>
                            Hear it in Action
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full md:w-1/2'>
                    <div className="bg-gradient-to-br from-[#FFD3B4] via-[#FFD3B4] to-white border p-6 h-auto md:h-96 w-full md:w-80 flex flex-col justify-center rounded-xl shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Try now</h2>
                        <p className="mb-4 text-black">Get a call from Toingg</p>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-gray-700 text-black bg-transparent rounded-full px-4 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="border border-gray-700 text-black bg-transparent rounded-full px-4 py-2"
                            />
                            <select className="border border-gray-700 bg-transparent rounded-xl px-4 py-2">
                                <option value="">Choose your language</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600"
                                >
                                    <IoCall className='text-2xl' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
