import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    comments: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
  },
  actions: {
    async getAccount({ commit }) {
      try {
        let res = await api.get("account");
        commit("setProfile", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getPosts({ commit }) {
      try {
        let res = await api.get("api/posts");
        commit("setPosts", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCommentsByPost({ commit }, id) {
      let res = await api.get("api/posts/" + id + "/comments");
      commit("setComments", res.data);
    },
    async createPost({ commit }, newPost) {
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
      newPost.time = `${hours}:${minutes} ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
      let res = await api.post("api/posts", newPost);
      commit("addPost", res.data);
    },
  },
  modules: {},
});
