import axios from "axios";

const OMDB_API_KEY = process.env.VUE_APP_OMDB_API_KEY;

export const configApi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`,
});

configApi.defaults.headers.common["Content-Type"] = "application/json";
