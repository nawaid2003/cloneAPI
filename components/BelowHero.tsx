import React from 'react';

const BelowHero: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12 md:mt-[-100px] px-4 md:px-0'>
            <div className='text-center'>
                <span className='text-gray-400 text-base md:text-lg lg:text-xl'>
                    Automate your Agent with 5000+ integrations like
                </span>
            </div>
            <div className='flex flex-wrap gap-4 md:gap-10 justify-center items-center mt-6 md:mt-10'>
                <img src="./Mask group.png" alt="Integration 1" className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14' />
                <img src="./Mask group (1).png" alt="Integration 2" className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'/>
                <img src="./Mask group (2).png" alt="Integration 3" className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'/>
                <img src="./Mask group (3).png" alt="Integration 4" className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'/>
                <img src="./sale.png" alt="Integration 5" className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20'/>
            </div>
        </div>
    )
}

export default BelowHero;
