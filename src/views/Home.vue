<template>
  <div class="home">
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
