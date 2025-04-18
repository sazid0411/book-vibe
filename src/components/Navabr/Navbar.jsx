import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='container mx-auto px-4 md:px-0 py-4 md:py-8 flex justify-between items-center '>
            <div>
                <h1 className='text-[28px] font-bold'>Book Vibe</h1>
            </div>
            <div className='md:block hidden'>
                <ul className='flex gap-5'>
                    <li><a href="/" className='btn bg-transparent border-[#23BE0A] text-[#23BE0A] text-lg '>Home</a></li>
                    <Link to="/listedBook" className='btn bg-transparent border-0 text-lg '>Listed Books</Link>
                    <li><a href="" className='btn bg-transparent border-0 text-lg '>Pages to Read</a></li>
                </ul>
            </div>
            <div className='space-x-3 hidden md:block' >
                <button className='btn bg-[#59C6D2] text-lg text-white rounded-lg border-0'>Sign In </button>
                <button className='btn bg-[#23BE0A] text-lg text-white rounded-lg border-0'>Sign Up </button>
            </div>
            <div className='md:hidden' onClick={() => {
                setMenu(!menu)
            }}>
                {
                    menu ? <X size={28} /> : <Menu className='text-lg' />
                }
            </div>
            <div className={` md:hidden absolute right-0 ${menu ? "top-15" : "-top-60"} duration-700 bg-amber-50 p-3 rounded-lg mr-2`} >
                <ul className='text-right '>
                    <li><a href="/" className='btn bg-transparent border-0 text-[#23BE0A] text-lg '>Home</a></li>
                    <li><a href="/listedBook" className='btn bg-transparent border-0 text-lg '>Listed Books</a></li>
                    <li><a href="" className='btn bg-transparent border-0 text-lg '>Pages to Read</a></li>
                </ul>
                <div className='space-x-3  md:block' >
                    <button className='btn bg-[#59C6D2] text-lg text-white rounded-lg border-0'>Sign In </button>
                    <button className='btn bg-[#23BE0A] text-lg text-white rounded-lg border-0'>Sign Up </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;