<template>
  <div class="container-fluid">
    <button
      class="btn btn-success mt-3 mx-3"
      @click="active = true"
      v-if="$auth.isAuthenticated && active == false"
    >
      Create a Post
    </button>
    <div class="d-flex justify-content-center align-items-center mt-3">
      <form v-if="active == true" @submit.prevent="createPost">
        <input
          class="rounded width p-1"
          v-model="newPost.body"
          type="text"
          placeholder="Share whats on your mind here"
        />
        <button class="btn btn-success mx-2" type="submit">Post</button>
      </form>
    </div>
    <div class="row">
      <div class="mt-3 col-6" v-for="post in posts" :key="post.id">
        <post :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import post from "../components/post.vue";
export default {
  name: "Home",
  components: {
    post,
  },
  data() {
    return {
      active: false,
      newPost: {},
    };
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", this.newPost);
      this.newPost = {};
      this.active = false;
    },
  },
};
</script>

<style scoped>
.width {
  width: 60vw;
}
</style>
