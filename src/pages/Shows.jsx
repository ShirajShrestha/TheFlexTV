import { useEffect, useState } from "react";
import { movieCategories, TvSeriesCategories } from "../constants/data";
import { fetchMovies, fetchTvSeries } from "../utils/api";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";

const Shows = () => {
  const navigate = useNavigate();
  const [showByCategory, setShowByCategory] = useState([]);
  const { type } = useParams();

  const handleShowMore = (category) => {
    navigate(`./section?value=${category}`);
  };

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const movies = {};
        for (const category of movieCategories) {
          const categoryKey = category.value;
          const response = await fetchMovies(category.value);
          movies[categoryKey] = response.results.slice(0, 4); // Take only the first 4 movies
        }
        setShowByCategory(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchAllSeries = async () => {
      try {
        const movies = {};
        for (const category of TvSeriesCategories) {
          const categoryKey = category.value;
          const response = await fetchTvSeries(category.value);
          movies[categoryKey] = response.results.slice(0, 4); // Take only the first 4 movies
        }
        setShowByCategory(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (type === "movies") {
      fetchAllMovies();
    } else {
      fetchAllSeries();
    }
  }, [type]);

  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(showByCategory).map(([category, shows]) => (
        <div key={category} className="mb-8">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">
              {category.replace("_", " ").toUpperCase()}
            </h2>
            <p
              className="font-bold text-lg cursor-pointer"
              onClick={() => handleShowMore(category)}
            >
              Show more
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shows.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title || movie.name}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shows;
