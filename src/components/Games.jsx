import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Card from "./Card";
import { useOutletContext } from "react-router";
import Loader from "./Loader";

const API = import.meta.env.VITE_API;

const Games = () => {
  const [favArr, setFavArr] = useOutletContext();

  const fetchGames = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API}&page=${pageParam}&page_size=10`
    );
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined; // rawg uses "next" url
      return pages.length + 1; // next page number
    },
  });

  // handle scroll
  React.useEffect(() => {
  let timeout;

  const onScroll = () => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (bottomReached && hasNextPage && !isFetchingNextPage) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fetchNextPage();
      }, 1000); // 👈 delay in ms (0.6s)
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => {
    clearTimeout(timeout);
    window.removeEventListener("scroll", onScroll);
  };
}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Loader />;
  if (error) return <p className="text-center">{error.message}</p>;

  return (
    <div className="px-10 py-10 font-outfit">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
        {data.pages.map((page) =>
          page.results.map((game) => (
            <Card
              key={game.id}
              game={game}
              favArr={favArr}
              setFavArr={setFavArr}
            />
          ))
        )}
      </div>

      {/* loading spinner when fetching more */}
      {isFetchingNextPage && (
        <div className="text-center mt-4">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Games;
