import React from 'react';
import books from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='bg-[#1313130D] container mx-auto h-[60vh] flex justify-around rounded-2xl px-5 md:px-0 '>
            <div className='flex gap-10 flex-col items-start justify-center '>
                <h1 className='text-4xl md:text-6xl display'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white text-xl py-6 rounded-lg'>View The List</button>
            </div>
            <div className='flex items-center justify-center '>
                <img src={books} alt="" className='w-[80%] md:w-[100%]' />
            </div>

        </div>
    );
};

export default Banner;