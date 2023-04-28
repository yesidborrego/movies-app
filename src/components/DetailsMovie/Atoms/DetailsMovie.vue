<template>
  <div class="container p-4 my-3 text-start shadow overflow-hidden col-lg-6">
    <h1 class="fw-bold text-center mb-1">{{ movie.title }}</h1>
    <div class="row pt-3">
      <div
        class="col-12 col-sm-6 border-end animate__animated animate__slideInLeft"
      >
        <div class="div-img my-3">
          <img
            class="rounded img-fluid"
            :src="movie.poster"
            :alt="movie.title"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 px-4 animate__animated animate__slideInRight">
        <div class="d-flex justify-content-between">
          <p class="tag-p-small">
            <strong>{{ movie.runtime }}</strong>
          </p>
          <p class="tag-p-small">
            <strong>{{ movie.genre }}</strong>
          </p>
        </div>
        <p class="fs-6 my-2">"{{ movie.plot }}"</p>
        <hr />
        <p><strong>Title: </strong>{{ movie.title }}</p>
        <p><strong>Actors: </strong>{{ movie.actors }}</p>
        <p><strong>Director: </strong>{{ movie.director }}</p>
        <p><strong>Writer: </strong>{{ movie.writer }}</p>
        <p><strong>Country: </strong>{{ movie.country }}</p>
        <p><strong>Language: </strong>{{ movie.language }}</p>
        <p><strong>Year: </strong>{{ movie.year }}</p>
        <p><strong>Released: </strong>{{ movie.released }}</p>
        <div class="d-flex justify-content-end mt-3">
          <router-link class="btn btn-warning btn-sm" :to="{ name: 'home' }">
            Go back
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsMovie",
  props: {
    movie: Object,
  },
};
</script>

<style scoped>
.div-img {
  width: 100%;
}

img {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  width: 95%;
}

p {
  margin-bottom: 5px;
}

.tag-p-small {
  font-size: 13px;
}
</style>
