import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchMovies, fetchTvSeries } from "../utils/api";
import Card from "../components/Card";

const MoreShows = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("value");
  const { type } = useParams();
  const [show, setShow] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    setPage((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setLoading(true);
    try {
      const moreMovies = async () => {
        const response = await fetchMovies(category, page);
        setShow(response.results);
      };
      const moreSeries = async () => {
        const response = await fetchTvSeries(category, page);
        setShow(response.results);
      };

      if (type === "movies") {
        moreMovies();
      } else {
        moreSeries();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [category, page, type]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">
        {category.replace("_", " ").toUpperCase()}
      </h2>
      {loading ? (
        <p className="font-bold text-3xl text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {show.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title || movie.name}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                id={movie.id}
              />
            ))}
          </div>
          <div className="w-full flex items-center justify-center gap-4 ">
            <button
              className="bg-white text-black rounded-md px-3 py-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={page === 1}
              onClick={() => {
                handleDecrement();
              }}
            >
              prev
            </button>
            <button
              className="bg-white text-black rounded-md px-3 py-1"
              onClick={() => {
                handleIncrement();
              }}
            >
              next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoreShows;
