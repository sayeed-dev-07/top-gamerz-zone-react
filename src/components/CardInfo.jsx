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
    const tags = game.tags.map(elem => elem.name).slice(0,5);
    const curRate = game.rating;
    const topRate = game.rating_top;
    const date = parse(game.released, "yyyy-MM-dd", new Date());
const formatted = format(date, "d MMMM yyyy");

    return (
        <div className='py-6  px-2 md:p-12 font-outfit'>
            <h1 className='text-4xl font-semibold'>{game.name}</h1>
        <div className='flex items-start justify-center gap-20 py-6 md:py-12 lg:flex-row flex-col'>
            <div className='w-full lg:w-[60%]'>
                <div>
                    <Carousel arr={imgArr} />
                </div>
            </div>
            <div className='flex flex-col gap-y-5 text-xl'>
                <div className='flex flex-wrap items-center justify-start'>
                    <p>{`🖥️ Platforms : ${String(platForms)}`}</p>

                </div>
                <div className='flex flex-wrap wrap-break-word items-center justify-start'>
                    <p className='wrap-break-word'>{`🏷️ Tags: ${String(tags)}`}</p>

                </div>
                <div className='flex flex-wrap wrap-break-word items-center justify-start'>
                    <p>{`⭐ Rating: ${(curRate).toFixed(1)} / ${topRate}`}</p>

                </div>
                <div className='flex flex-wrap wrap-break-word items-center justify-start'>
                    <p>{`🎮 Released: ${formatted}`}</p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default CardInfo;
