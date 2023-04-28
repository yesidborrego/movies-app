<template>
  <div class="container p-4 my-3 text-start shadow overflow-hidden">
    <h1 class="fw-bold text-center mb-1">{{ title }}</h1>
    <div class="row pt-3">
      <div
        class="col-12 col-sm-6 border-end animate__animated animate__slideInLeft"
      >
        <div class="div-img my-3">
          <img class="rounded img-fluid" :src="poster" :alt="title" />
        </div>
      </div>
      <div class="col-12 col-sm-6 px-4 animate__animated animate__slideInRight">
        <div class="d-flex justify-content-between">
          <p class="tag-p-small">
            <strong>{{ runtime }}</strong>
          </p>
          <p class="tag-p-small">
            <strong>{{ genre }}</strong>
          </p>
        </div>
        <p class="fs-6 my-2">"{{ plot }}"</p>
        <hr />
        <p><strong>Title: </strong>{{ title }}</p>
        <p><strong>Actors: </strong>{{ actors }}</p>
        <p><strong>Director: </strong>{{ director }}</p>
        <p><strong>Writer: </strong>{{ writer }}</p>
        <p><strong>Country: </strong>{{ country }}</p>
        <p><strong>Language: </strong>{{ language }}</p>
        <p><strong>Year: </strong>{{ year }}</p>
        <p><strong>Released: </strong>{{ released }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsMovie",
  props: {
    actors: String,
    country: String,
    director: String,
    genre: String,
    language: String,
    plot: String,
    poster: String,
    released: String,
    runtime: String,
    title: String,
    writer: String,
    year: String,
    imdbID: String,
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
