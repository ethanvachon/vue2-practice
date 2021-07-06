<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import { onAuth } from "@bcwdev/auth0-vue";
import { setBearer } from "./services/AxiosService";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      setBearer(this.$auth.bearer);
      //NOTE if you want to do something everytime the user logs in, do so here
    }
  },
  components: {
    navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
