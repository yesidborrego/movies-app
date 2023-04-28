<template>
  <div class="container p-4 my-3 text-start shadow overflow-hidden col-lg-6">
    <h1 class="card-title placeholder-glow text-center mb-1">
      <span class="placeholder col-8"></span>
    </h1>
    <div class="row pt-3">
      <div class="col-12 col-sm-6 border-end text-center pt-4">
        <p class="card-text placeholder-glow">
          <span class="placeholder-img placeholder col-12"></span>
        </p>
      </div>
      <div class="col-12 col-sm-6 px-4">
        <p
          class="card-text placeholder-glow d-flex justify-content-between mb-3"
        >
          <span class="placeholder col-2"></span>
          <span class="placeholder col-4"></span>
        </p>

        <p class="card-text placeholder-glow">
          <span class="placeholder-plot placeholder col-12"></span>
        </p>

        <hr />
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
          <span class="placeholder col-8"></span>
          <span class="placeholder col-8"></span>
          <span class="placeholder col-8"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonMovieDetails",
};
</script>

<style scoped>
.card-text {
  margin-bottom: 10px;
}

.placeholder-img {
  margin: 0 auto;
  height: 400px;
  width: 90%;
}

.container {
  height: 598px;
}

.placeholder-plot {
  height: 100px;
}

@media screen and (max-width: 576px) {
  .container {
    height: 898px;
  }
}
</style>
