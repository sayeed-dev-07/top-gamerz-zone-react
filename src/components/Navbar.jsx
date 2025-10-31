import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [burgerOn, setBurgerOn] = useState(false)
    return (
        <div>
            <div className='flex px-2 md:px-[5%] font-outfit items-center justify-between py-5 md:py-10 bg-white text-black'>
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
            <div onClick={()=> burgerOn ? setBurgerOn(false) : setBurgerOn(true)} className='flex sm:hidden flex-col gap-y-2'>
                <div className={`${burgerOn ? 'translate-y-2 transition-all duration-150 rotate-45 ': 'block'} w-10 h-1 bg-black rounded-md`}></div>
                <div className={`${burgerOn ? 'hidden': ''} w-10 h-1 bg-black rounded-md`}></div>
                <div className={`${burgerOn ? 'transition-all duration-150 -rotate-45 -translate-y-1': 'block'} w-10 h-1 bg-black rounded-md`}></div>
            </div>

           

        </div>



         {burgerOn && 
         <div className='absolute min-h-[90vh] text-white bg-[black] w-screen py-[60%]'>
                <ul className='flex items-center flex-col justify-center h-full text-center '>
                    <li onClick={()=> setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                    <Link to='/'>Home</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                </li>
                <li onClick={()=> setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                    <Link to='games'>Games</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                </li>
                <li onClick={()=> setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                    <Link to='faviourite'>Faviourite</Link>
                    <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                </li>
                </ul>
            </div>
         }
        </div>
        
    );
};

export default Navbar;