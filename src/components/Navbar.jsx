import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex px-[5%] font-outfit items-center justify-between py-10 bg-white text-black'>
            <Link to='/' className='uppercase text-4xl font-semibold'>Gamerz</Link>
            <ul className='hidden sm:flex items-center justify-center text-2xl font-semibold gap-x-6'>
                <li className='group'>
                    <Link to='/'>Home</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-black duration-100'></div>
                </li>
                <li className='group'>
                    <Link to='games'>Games</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-black duration-100'></div>
                </li>
                <li className='group'>
                    <Link to='faviourite'>Faviourite</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-black duration-100'></div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;