import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "1c1a9768bc1078432e4175a9757599d6";

// Axios instance
const api = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: api_key,
  },
});

// Get trending movies
const getTrendingVideos = () => {
  return api.get("/trending/movie/day");
};

// Get movies by genre ID
const getMoviesByGenreId = (id) => {
  return api.get("/discover/movie", {
    params: {
      with_genres: id,
    },
  });
};

export default {
  getTrendingVideos,
  getMoviesByGenreId,
};
