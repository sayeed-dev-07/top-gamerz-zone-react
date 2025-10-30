import React from 'react';
import { useLocation } from 'react-router';
import Carousel from './Carousel';
import { Monitor, PcCaseIcon } from 'lucide-react';
import { format, parse } from "date-fns";

const CardInfo = () => {
    const location = useLocation();
    const { game } = location.state;
    const imgArr = game.short_screenshots;
    const platForms = game.platforms.map(elem => elem.platform.name);
    const tags = game.tags.map(elem => elem.name);
    const curRate = game.rating;
    const topRate = game.rating_top;
    const date = parse(game.released, "yyyy-MM-dd", new Date());
const formatted = format(date, "d MMMM yyyy");

    return (
        <div className='p-12 font-outfit'>
            <h1 className='text-4xl font-semibold'>{game.name}</h1>
        <div className=' flex items-start justify-center gap-20 py-12'>
            <div className='w-[60%]'>
                <div>
                    <Carousel arr={imgArr} />
                </div>
            </div>
            <div className='flex flex-col gap-y-5'>
                <div className='flex'>
                    <p>{`🖥️ Platforms : ${String(platForms)}`}</p>

                </div>
                <div className='flex'>
                    <p>{`🏷️ Tags: ${String(tags)}`}</p>

                </div>
                <div className='flex'>
                    <p>{`⭐ Rating: ${(curRate).toFixed(1)} / ${topRate}`}</p>

                </div>
                <div className='flex'>
                    <p>{`🎮 Released: ${formatted}`}</p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default CardInfo;
