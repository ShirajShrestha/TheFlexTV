import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie";
const TVSERIES_BASE_URL = "https://api.themoviedb.org/3/tv";

// API for fetching Movies
// type may be now_playing, popular, top_rated, upcoming
export const fetchMovies = async (type, currentPage = 1) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/${type}?language=en-US&page=${currentPage}&api_key=${key}`
  );
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/${id}?language=en-US&api_key=${key}`
  );
  return response.data;
};

// replace recommendations with similar
export const fetchSimilarMovies = async (id) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/${id}/recommendations?language=en-US&page=1&api_key=${key}`
  );
  return response.data;
};

export const fetchTvSeries = async (type, currentPage = 1) => {
  const response = await axios.get(
    `${TVSERIES_BASE_URL}/${type}?language=en-US&page=${currentPage}&api_key=${key}`
  );
  return response.data;
};

export const fetchSeriesDetails = async (id) => {
  const response = await axios.get(
    `${TVSERIES_BASE_URL}/${id}?language=en-US&api_key=${key}`
  );
  console.log("series deteails", response);
  return response.data;
};

export const fetchSimilarSeries = async (id) => {
  const response = await axios.get(
    `${TVSERIES_BASE_URL}/${id}/recommendations?language=en-US&page=1&api_key=${key}`
  );
  return response.data;
};
