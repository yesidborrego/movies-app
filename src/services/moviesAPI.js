import { configApi } from "./configApi";

export const getMovies = async (movieName, page = 1) => {
  const { data, status } = await configApi.get(
    `&type=movie&s=${movieName}&page=${page}`
  );
  return { data: data.Search, totalResults: data.totalResults, status };
};

export const getMovie = async (movieId) => {
  const { data, status } = await configApi.get(`&i=${movieId}`);
  return { data: data, status };
};
