<template>
  <div class="home">
    <button
      class="btn btn-success"
      @click="active = !active"
      v-if="$auth.isAuthenticated"
    >
      Post
    </button>
    <form v-if="active == true" @submit.prevent="createPost">
      <input
        v-model="newPost.body"
        type="text"
        placeholder="Share whats on your mind here"
      />
      <button class="btn" type="submit">Post</button>
    </form>
    <div v-for="post in posts" :key="post.id">
      <post :post="post" />
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
    },
  },
};
</script>
Calculator
