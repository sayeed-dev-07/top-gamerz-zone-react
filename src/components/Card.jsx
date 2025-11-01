import { Minus, Plus } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';


const Card = ({ game, favArr, setFavArr }) => {
    const { name, background_image, rating } = game;

    const isFav = favArr.some((item) => item.id === game.id);
    const basePath = location.pathname.startsWith("/faviourite") 
    ? "/faviourite"
    : "/games";

    function handleClick() {
        if (isFav) {

            // remove
            setFavArr((prev) => prev.filter((item) => item.id !== game.id));
            toast.error(`${name} removed from favourites ❌`);
        } else {

            // add
            setFavArr((prev) => [...prev, game]);
            toast.success(`${name} added to favourites ✔`);
        }
    }

    return (
        <div className="flex flex-col gap-y-2 rounded-xl group bg-[#171717] overflow-hidden text-white card-appear">
            <Link to={`${basePath}/${game.slug}`}
                state={{ game }}>
                    <div className="  tooltip overflow-hidden" data-tip="Cick to get game info">
                        <div>
                    <img src={background_image} alt={name} className="rounded-tr-md rounded-tl-md group-hover:scale-110 duration-400 transition-all" />
                </div>
                    </div>
                </Link>
            <div className="flex px-2  sm:px-6 pb-6 flex-col items-start gap-y-3">
                <Link to={`${basePath}/${game.slug}`}
                state={{ game }}>
                    <p className="text-xl font-semibold hover:underline">{name}</p>
                </Link>
                <p>Rating: {rating}</p>

                <button
                    onClick={handleClick}
                    className="sm:p-4 p-2 border text-base sm:text-xl cursor-pointer justify-center hover:text-white hover:bg-black rounded-md transition-all duration-150 flex items-start"
                >
                    {isFav ? 'Remove from Faviourite' : 'Add to Faviourite'}
                </button>

            </div>

        </div>
    );
};

export default Card;
