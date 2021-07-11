<template>
  <div class="d-flex justify-content-center align-items-center">
    <div
      class="card transition"
      :class="{ size: active == false, 'size-2': active == true }"
    >
      <div class="d-flex justify-content-between border-bottom">
        <p class="card-text">{{ post.creator.name }}</p>
        <p class="card-text">{{ post.time }}</p>
      </div>
      <h6 class="p-2 m-0">{{ post.body }}</h6>
      <div
        class="d-flex justify-content-end align-items-center width-100"
        @click="active = !active"
      >
        <div class="d-flex align-items-center">
          <p class="pb-2 m-0">{{ comments != null ? comments.length : 0 }}</p>
          <i class="fas fa-comment px-2 pb-2"></i>
        </div>
      </div>
      <div v-if="active == true" class="d-flex flex-column height">
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="overflow-y-scroll height"
        >
          <div class="d-flex flex-column justify-content-center p-1 border-top">
            <p class="small m-0">{{ comment.creator.name }}</p>
            <p class="medium m-0">{{ comment.body }}</p>
          </div>
        </div>
        <form
          @submit.prevent="postComment"
          v-if="$auth.isAuthenticated"
          class="d-flex justify-content-center p-1 my-1"
        >
          <input
            v-model="newComment.body"
            type="text"
            placeholder="add comment"
            class="width-100"
          />
        </form>
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
      active: false,
      newComment: {},
    };
  },
  async mounted() {
    const res = await api.get("api/posts/" + this.post.id + "/comments");
    this.comments = res.data;
    console.log(this.comments);
  },
  methods: {
    async postComment() {
      this.newComment.postId = this.post.id;
      // this.$store.dispatch("postComment", this.newComment);
      const date = new Date();
      let hours = date.getHours();
      if (hours > 12) {
        hours -= 12;
      }
      let minutes = date.getMinutes();
      if (minutes < 10) {
        // @ts-ignore
        minutes = "0" + minutes;
      }
      this.newComment.time = `${hours}:${minutes} ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
      const res = await api.post("api/comments", this.newComment);
      this.comments.push(res.data);
      this.newComment = {};
    },
  },
};
</script>

<style scoped>
.transition {
  transition: all 0.5s;
}
.height {
  height: 100%;
}
.size {
  width: 80%;
  height: 6rem;
}
.size-2 {
  width: 80%;
  height: 15rem;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.width-100 {
  width: 100%;
}
.card-text {
  font-size: 0.8em;
  padding: 0.5em;
  margin: 0px;
}
.small {
  font-size: 0.7em;
}
.fas {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
}
</style>
