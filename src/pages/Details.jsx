import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchSeriesDetails,
  fetchSimilarMovies,
  fetchSimilarSeries,
} from "../utils/api";

const Details = () => {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);
  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "movies") {
          const movieData = await fetchMovieDetails(id);
          setItem(movieData);

          const similarMoviesData = await fetchSimilarMovies(id);
          setSimilarItems(similarMoviesData.results.slice(0, 8));
        } else if (type === "tv_shows") {
          const seriesData = await fetchSeriesDetails(id);
          setItem(seriesData);

          const similarSeriesData = await fetchSimilarSeries(id);
          setSimilarItems(similarSeriesData.results.slice(0, 8));
        }
      } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
      }
    };

    fetchData();
  }, [id, type]);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`, // TMDB backdrop
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {type === "movies" ? item.title : item.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">{item.tagline}</p>
            <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg">
              Watch Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster Image */}
          <div className="md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} // TMDB poster
              alt={type === "movies" ? item.title : item.name}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">
              {type === "movies" ? item.title : item.name}
            </h2>
            <p className="text-gray-300 mb-4">{item.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg">
                  {type === "movies" ? "Release Date" : "First Air Date"}:
                </h3>
                <p className="text-gray-400">
                  {type === "movies" ? item.release_date : item.first_air_date}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Genre:</h3>
                <p className="text-gray-400">
                  {item.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
              {type === "movies" && (
                <div>
                  <h3 className="font-semibold text-lg">Runtime:</h3>
                  <p className="text-gray-400">{item.runtime} minutes</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-lg">Rating:</h3>
                <p className="text-gray-400">{item.vote_average} / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Items Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Similar {type === "movies" ? "Movies" : "Series"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarItems.map((similar) => (
              <div
                key={similar.id}
                className="rounded-lg overflow-hidden bg-gray-700 shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`} // TMDB poster
                  alt={type === "movies" ? similar.title : similar.name}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold truncate">
                    {type === "movies" ? similar.title : similar.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {type === "movies"
                      ? similar.release_date
                      : similar.first_air_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
