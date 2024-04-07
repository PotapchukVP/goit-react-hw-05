import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const tokenKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTI4YjczM2I4YzZlY2U3OTdkMmE5ZGM2MDU5M2U5MiIsInN1YiI6IjY2MDMzYWFkMWIxZjNjMDE3YzlkYzAwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kmU2sZ15Rzy6eiyOJefuuDNpz9FeJtMyNfCGoK8FjWg";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ` + tokenKey,
  },
});

const options = {
  language: "en-US",
  page: 1,
};

export const getPopularMovies = async () => {
  const trendingURL = "trending/movie/day";
  const response = await instance.get(trendingURL, { params: options });
  return response.data;
};

export const getMoviesBySearch = async (search) => {
  const searchURL = `/search/movie?query=${search}`;
  const response = await instance.get(searchURL, { params: options });
  return response.data;
};

export const getPoster = async (posterPath) => {
  const searchURL = `https://image.tmdb.org/t/p/${posterPath}`;
  const response = await instance.get(searchURL, { params: options });
  return response.data;
};

export const getMoviesDetails = async (id) => {
  const searchURL = `movie/${id}`;
  const response = await instance.get(searchURL, { params: options });
  return response.data;
};

export const getCast = async (id) => {
  const searchURL = `movie/${id}/credits`;
  const response = await instance.get(searchURL, { params: options });
  return response.data;
};

export const getReviews = async (id) => {
  const searchURL = `movie/${id}/reviews`;
  const response = await instance.get(searchURL, { params: options });
  return response.data;
};
