<template>
  <div class="spinner-border spinner-text" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "SpinnerLoading",
};
</script>

<style scoped>
.spinner-text {
  color: #4bbd8a;
  height: 3rem;
  width: 3rem;
}
</style>
