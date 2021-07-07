<template>
  <div class="home">
    <button class="btn btn-success" @click="active = !active">Post</button>
    <h1 v-if="active == true">test</h1>
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
};
</script>
Calculator
