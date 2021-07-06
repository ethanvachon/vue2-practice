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
      } catch (error) {
        console.log(error);
      }
    },
    async getPosts({ commit }) {
      try {
        let res = await api.get("api/posts");
        console.log(res.data);
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
      let res = await api.post("api/posts", newPost);
      commit("addPost", res.data);
    },
  },
  modules: {},
});
