<template>
  <nav class="d-flex justify-content-center" aria-label="Page navigation">
    <ul class="pagination">
      <li
        :class="['page-item', { disabled: pagination.currentPage - 1 === 0 }]"
        @click="onPrevPage"
      >
        <span class="page-link" aria-hidden="true" aria-label="Previous"
          >&laquo;</span
        >
      </li>
      <li class="page-item">
        <span class="page-link"
          >Pag. {{ pagination.currentPage }} de
          {{ pagination.numberPages }}</span
        >
      </li>
      <li
        :class="[
          'page-item',
          { disabled: pagination.currentPage === pagination.numberPages },
        ]"
        @click="onNextPage"
      >
        <span class="page-link" aria-hidden="true" aria-label="Next"
          >&raquo;</span
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "PaginationMovies",
  props: {
    pagination: Object,
  },
  methods: {
    onPrevPage() {
      this.$emit("onPrevPage");
    },
    onNextPage() {
      this.$emit("onNextPage");
    },
    onGoToPage(page) {
      this.$emit("onGoToPage", page);
    },
  },
};
</script>

<style scoped>
.page-link {
  cursor: pointer;
}
</style>
