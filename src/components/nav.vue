<template>
  <div>
    <button
      class="btn btn-success"
      @click="login"
      v-if="!$auth.isAuthenticated"
    >
      Login
    </button>
    <button class="btn btn-danger" @click="logout" v-else>logout</button>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
        // NOTE if you want to do something everytime the user logs in, do so here
      }
    },
    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style scoped></style>
