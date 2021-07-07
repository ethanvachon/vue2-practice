<template>
  <div id="nav" class="d-flex justify-content-between">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <div>
      <button
        class="btn btn-success mx-3"
        @click="login"
        v-if="!$auth.isAuthenticated"
      >
        Login
      </button>
      <button
        class="btn btn-danger mx-3"
        @click="logout"
        v-if="$auth.isAuthenticated"
      >
        Log out
      </button>
      <CreatePostModal />
    </div>
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
        this.$store.dispatch("getAccount");
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

<style scoped>
#nav {
  display: flex;
  align-items: center;
  height: 8vh;
  background-color: #2c3e50;
  display: flex;
}

#nav a {
  padding-left: 20px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
