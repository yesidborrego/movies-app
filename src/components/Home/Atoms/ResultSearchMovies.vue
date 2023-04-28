<template>
  <div class="container text-center my-4">
    <section>
      <template v-if="movies">
        <div class="row animate__animated animate__fadeIn d-flex">
          <div
            class="card-container mx-auto my-2"
            v-for="movie in movies"
            :key="movie.imdbID"
          >
            <CardMovies
              :Poster="movie.Poster"
              :Title="movie.Title"
              :Year="movie.Year"
              :imdbID="movie.imdbID"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <template v-if="notFound">
          <div class="no-found-result">
            <h2>Película no encontrada</h2>
          </div>
        </template>
        <template v-else>
          <div class="div-spinner">
            <SpinnerLoading />
          </div>
        </template>
      </template>
    </section>
  </div>
</template>
<script>
import CardMovies from "@/components/Home/Atoms/CardMovies.vue";
import SpinnerLoading from "@/components/Global/Spinner/Spinner.vue";
export default {
  name: "ResultSearchMovies",
  props: {
    movies: Array,
    notFound: Boolean,
  },
  components: { CardMovies, SpinnerLoading },
};
</script>

<style scoped>
.card-container {
  width: 18rem;
}

.div-spinner {
  align-items: center;
  display: flex;
  height: 50vh;
  justify-content: center;
}
</style>
