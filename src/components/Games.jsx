import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import { useOutletContext } from 'react-router';
import Loader from './Loader';
import { Link } from 'react-router';

const API = import.meta.env.VITE_API;

const Games = () => {

    const [favArr, setFavArr] = useOutletContext();

    const { data, isLoading, error } = useQuery({
        queryKey: ['games'],
        queryFn: async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=${API}&page_size=30`);
            if (!res.ok) throw new Error('Something went wrong');
            const result = await res.json();
            return result.results;
        },
        staleTime: 1000 * 60 * 10,
    });

    if (isLoading) return <Loader/>;
    if (error) return <p className="text-center">Something went wrong: {error.message}</p>;

    return (
        <div>
            <div className="grid font-outfit grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  md:py-20 p-10 items-center justify-center gap-6">
            
            {data.map((game) => (
                
                    <Card key={game.id}  game={game} favArr={favArr} setFavArr={setFavArr} />

            ))}
        </div>
        </div>
    );
};

export default Games;