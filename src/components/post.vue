<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card width">
      <div class="d-flex justify-content-between border-bottom">
        <p class="card-text">{{ post.creator.name }}</p>
        <p class="card-text">{{ post.time }}</p>
      </div>
      <h6 class="p-2">{{ post.body }}</h6>
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

<style scoped>
.width {
  width: 80%;
}
.card-text {
  font-size: 0.8em;
  padding: 1em;
  margin: 0px;
}
</style>
