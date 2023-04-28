<template>
  <form @submit.prevent="onSubmit">
    <div class="container-form">
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Type the name of the movie"
          v-model="searchtext"
          maxlength="50"
        />
      </div>
      <div class="form-button">
        <button
          type="submit"
          class="btn btn-primary btn-sm"
          :disabled="!searchtext"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchMovies",
  data() {
    return {
      searchtext: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmitHandler", this.searchtext.trim());
    },
  },
};
</script>

<style scoped>
.container-form {
  display: flex;
  justify-content: center;
}

.input-group {
  width: 50%;
}

.form-button button {
  margin-left: 10px;
  width: 100%;
}
</style>
