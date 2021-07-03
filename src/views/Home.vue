<template>
  <div class="home">home</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
