import React from 'react';
import { Link, useOutletContext } from 'react-router';
import Card from './Card';

const Faviourite = () => {
  const [favArr, setFavArr] = useOutletContext();

  if (!favArr || favArr.length === 0) {
    return (
      <div className="text-center py-24 font-outfit flex items-center justify-center gap-y-5 flex-col">
        <p className='text-6xl'>Nothing here</p>
        <Link to="/games" className="text-blue-500 text-2xl underline">
          Browse Games
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] px-2 py-5 sm:p-10  justify-center gap-6 font-outfit items-start">
      {favArr.map((game) => (
        <Card key={game.id} game={game} favArr={favArr} setFavArr={setFavArr} />
      ))}
    </div>
  );
};

export default Faviourite;
