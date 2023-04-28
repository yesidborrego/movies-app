<template>
  <div class="container my-3">
    <SearchMovies @onSubmitHandler="onSubmit" />
    <ResultSearchMovies :movies="movies" />
  </div>
</template>

<script>
import SearchMovies from "@/components/Movies/SearchMovies.vue";
import ResultSearchMovies from "@/components/Movies/ResultSearchMovies.vue";
import { getMovies } from "@/services/moviesAPI";
import { LocalStorageEncrypt } from "@/utility/localStorage";
export default {
  name: "MoviesPage",
  components: { ResultSearchMovies, SearchMovies },
  data() {
    return {
      textSearch: null,
      pagination: {
        currentPage: 1,
        totalResults: 1,
      },
      movies: null,
    };
  },
  mounted() {
    this.textSearch = LocalStorageEncrypt.decrypt("last-search") || "batman";
    this.getMovies();
  },
  methods: {
    onSubmit(textSearch) {
      this.textSearch = textSearch;
      this.getMovies();
    },
    async getMovies() {
      const { data, totalResults, status } = await getMovies(
        this.textSearch,
        this.currentPage
      );
      if (status === 200) {
        this.movies = data;
        this.pagination.totalResults = totalResults;
        LocalStorageEncrypt.encrypt("last-search", this.textSearch);
      }
    },
  },
};
</script>
