import Vue from "vue";
import Vuex from "vuex";
import { getCookie, setCookie, removeCookie } from "@/utils/cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 用户登录
    token: getCookie("token"),
    name: "",
    avatar: "",
    roles: ""
  },

  getters: {
    // 用户登录
    token: state => state.token,
    name: state => state.name,
    avatar: state => state.avatar,
    roles: state => state.roles
  },

  mutations: {
    // 用户登录
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        // 模拟登录
        commit("SET_TOKEN", "test");
        setCookie("token","test");
        resolve();
        // login({ username: username.trim(), password: password }).then(response => {
        //   const { data } = response
        //   commit('SET_TOKEN', data.token)
        //   setToken(data.token)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      });
    },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit("SET_ROLES", "admin");
        commit("SET_NAME", "管理员");
        commit(
          "SET_AVATAR",
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
        );
        resolve();
      });
    },

    // user logout
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", "");
        removeCookie("token");
        resolve();
      });
    },

    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", "");
        removeCookie("token");
        resolve();
      });
    }
  }
});

export default store;
