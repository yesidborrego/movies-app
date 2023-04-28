<template>
  <div v-if="isLoading">
    <SkeletonMovieDetails />
  </div>
  <div v-else>
    <DetailsMovie :movie="movie" />
  </div>
</template>

<script>
import SkeletonMovieDetails from "@/components/DetailsMovie/Atoms/SkeletonMovieDetails.vue";
import DetailsMovie from "@/components/DetailsMovie/Atoms/DetailsMovie.vue";
import { useMovieDetails } from "@/hooks/useMovieDetails";
const { data, created, methods } = useMovieDetails;

export default {
  name: "MovieDetailsComponent",
  components: { SkeletonMovieDetails, DetailsMovie },
  data,
  created,
  methods,
};
</script>
