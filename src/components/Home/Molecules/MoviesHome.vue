<template>
  <div class="container my-3">
    <SearchMovies @onSubmitHandler="onSubmit" />
    <ResultSearchMovies :movies="movies" />
    <template v-if="pagination.numberPages">
      <PaginationMovies
        :pagination="pagination"
        @onPrevPage="onPrevPage"
        @onNextPage="onNextPage"
        @onGoToPage="onGoToPage"
      />
    </template>
  </div>
</template>

<script>
import SearchMovies from "@/components/Home/Atoms/SearchMovies.vue";
import ResultSearchMovies from "@/components/Home/Atoms/ResultSearchMovies.vue";
import { getMovies } from "@/services/moviesAPI";
import { LocalStorageEncrypt } from "@/utilities/localStorage";
import PaginationMovies from "../Atoms/PaginationMovies.vue";

export default {
  name: "MoviesHomeComponent",
  components: {
    ResultSearchMovies,
    SearchMovies,
    PaginationMovies,
  },
  data() {
    return {
      textSearch: null,
      pagination: {
        currentPage: 1,
        totalResults: 1,
        numberPages: 1,
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
        this.pagination.currentPage
      );
      if (status === 200) {
        this.movies = data;
        this.pagination.totalResults = totalResults;
        LocalStorageEncrypt.encrypt("last-search", this.textSearch);
        this.getNumberPagesMovies(totalResults);
      }
    },
    getNumberPagesMovies(totalPages) {
      if (totalPages % 10 > 0) {
        const numberOfPage = parseInt(totalPages / 10 + 1);
        this.pagination.numberPages = numberOfPage;
        return;
      }
      const numberOfPage = parseInt(totalPages / 10);
      this.pagination.numberPages = numberOfPage;
    },
    onPrevPage() {
      this.pagination.currentPage = this.pagination.currentPage - 1;
      this.getMovies();
    },
    onNextPage() {
      this.pagination.currentPage++;
      this.getMovies();
    },
    onGoToPage(page) {
      this.pagination.currentPage = page;
      this.getMovies();
    },
  },
};
</script>
