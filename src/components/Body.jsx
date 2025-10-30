import React from 'react';
import { Link } from 'react-router';

const Body = () => {

    
    return (
        <div className='flex font-outfit flex-col gap-y-12 items-center  justify-center py-[10%]'>
            <p className='text-6xl font-semibold'>Welcome to Gamerz</p>
            <p className='w-[40%] text-center text-xl'>Explore and collect your favorite games from our massive library powered by RAWG API. Add to your cart, track your favorites, and enjoy a curated gaming experience.</p>
            <Link className='p-4 border cursor-pointer hover:bg-white hover:text-black rounded-md duration-150 font-semibold' to='games'>Browse Games
            </Link>
        </div>
    );
};

export default Body;