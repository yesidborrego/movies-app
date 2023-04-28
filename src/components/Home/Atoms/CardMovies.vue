<template>
  <div class="card border-0 m-2 text-start" @click="onLoadMovieDetails">
    <img :src="Poster" class="card-img-top" :alt="Title" />
    <div class="card-body">
      <h5 class="card-title">{{ Title }}</h5>
    </div>
  </div>
</template>

<script>
import { convertTitleInSlug } from "@/utilities/convertTitleInSlug";

export default {
  name: "CardMovies",
  props: {
    Poster: String,
    Title: String,
    Year: String,
    imdbID: String,
  },
  methods: {
    onLoadMovieDetails() {
      const slug = convertTitleInSlug(this.Title);
      this.$router.push({
        name: "movie-details",
        params: { slug, id: this.imdbID },
      });
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.15) !important;
}

img {
  cursor: pointer;
  opacity: 0.7;
}

img:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5) !important;
  scale: 1.05;
  opacity: 1;
  transition: all 0.5s linear;
}

.card-body {
  padding: 8px;
}
.card-title {
  font-weight: bold;
  font-size: 14px;
  height: 30px;
}
</style>
