import { Minus, Plus } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';


const Card = ({ game, favArr, setFavArr }) => {
    const { name, background_image, rating } = game;

    const isFav = favArr.some((item) => item.id === game.id);

    function handleClick() {
        if (isFav) {
            // remove
            setFavArr((prev) => prev.filter((item) => item.id !== game.id));
            toast.error(`${name} removed from favourites ❌`);
        } else {
            // add
            setFavArr((prev) => [...prev, game]);
            toast.success(`${name} added to favourites 💖`);
        }
    }

    return (
        <div className="flex flex-col gap-y-2 rounded-xl bg-[#171717]  text-white">
            <div>
                <img src={background_image} alt={name} className="rounded-tr-md rounded-tl-md" />
            </div>
            <div className="flex px-6 pb-6 flex-col items-start gap-y-3">
                <p className="text-xl font-semibold">{name}</p>
                <p>Rating: {rating}</p>
                <button
                    onClick={handleClick}
                    className="p-4 border text-xl cursor-pointer justify-center hover:text-white hover:bg-black rounded-md transition-all duration-150 flex items-start"
                >
                    {isFav ? 'Remove from Faviourite' : 'Add to Faviourite'}
                </button>
            </div>
        </div>
    );
};

export default Card;
