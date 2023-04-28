<template>
  <div v-if="isLoading">
    <SkeletonMovieDetails />
  </div>
  <div v-else>
    <DetailsMovie
      :actors="movie.actors"
      :country="movie.country"
      :director="movie.director"
      :genre="movie.genre"
      :language="movie.language"
      :plot="movie.plot"
      :poster="movie.poster"
      :released="movie.released"
      :runtime="movie.runtime"
      :title="movie.title"
      :writer="movie.writer"
      :year="movie.year"
    />
  </div>
</template>

<script>
import SkeletonMovieDetails from "@/components/Skeleton/SkeletonMovieDetails.vue";
import DetailsMovie from "@/components/DetailsMovie/DetailsMovie.vue";
import { useMovieDetails } from "@/logics/useMovieDetails";
const { data, created, methods } = useMovieDetails;

export default {
  name: "MovieDetails",
  components: { SkeletonMovieDetails, DetailsMovie },
  data,
  created,
  methods,
};
</script>
