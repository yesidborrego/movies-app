import { getMovie } from "@/services/moviesAPI";
import { LocalStorageEncrypt } from "@/utility/localStorage";

export const useMovieDetails = {
  data() {
    return {
      movie: {
        actors: "",
        country: "",
        director: "",
        genre: "",
        language: "",
        plot: "",
        poster: "",
        released: "",
        runtime: "",
        title: "",
        writer: "",
        year: "",
        imdbID: "",
      },
      isLoading: true,
    };
  },
  created() {
    const idToSearch =
      this.$route.params.id || LocalStorageEncrypt.decrypt("imdbID");
    this.getMovie(idToSearch);
  },
  methods: {
    async getMovie(idToSearch) {
      const { data, status } = await getMovie(idToSearch);
      if (status === 200) {
        LocalStorageEncrypt.encrypt("imdbID", idToSearch);
        this.movie.poster = data.Poster;
        this.movie.title = data.Title;
        this.movie.runtime = data.Runtime;
        this.movie.genre = data.Genre;
        this.movie.plot = data.Plot;
        this.movie.actors = data.Actors;
        this.movie.director = data.Director;
        this.movie.year = data.Year;
        this.movie.country = data.Country;
        this.movie.language = data.Language;
        this.movie.released = data.Released;
        this.movie.writer = data.Writer;
        this.movie.imdbID = data.imdbID;
      }
      this.isLoading = false;
    },
  },
};
