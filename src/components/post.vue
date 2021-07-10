<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card width">
      <div class="d-flex justify-content-between border-bottom">
        <p class="card-text">{{ post.creator.name }}</p>
        <p class="card-text">{{ post.time }}</p>
      </div>
      <h6 class="p-2 m-0">{{ post.body }}</h6>
      <div class="d-flex justify-content-end align-items-center">
        <p class="pb-2 m-0">{{ comments.length }}</p>
        <i class="fas fa-comment px-2 pb-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../services/AxiosService";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: null,
    };
  },
  async mounted() {
    const res = await api.get("api/posts/" + this.post.id + "/comments");
    this.comments = res.data;
    console.log(this.comments);
  },
};
</script>

<style scoped>
.width {
  width: 80%;
}
.card-text {
  font-size: 0.8em;
  padding: 0.5em;
  margin: 0px;
}
.fas {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
}
</style>
