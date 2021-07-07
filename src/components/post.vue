<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card">
      <div class="card-body">
        <p class="card-text">{{ post.creator.name }}</p>
        <h4 class="card-title">{{ post.body }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
