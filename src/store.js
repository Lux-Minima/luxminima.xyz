import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// let psw = window.localStorage.getItem('psw')

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem("gotrue.user")
  },

  getters: {
    getUserStatus: state => !!state.user,
    getUser: state => JSON.parse(state.user)
  },

  mutations: {
    setUser: (state, activeUser) => {
      if (activeUser === false) {
        state.user = null;
        window.localStorage.removeItem("gotrue.user");
        return;
      } else if (activeUser === true) {
        state.user = window.localStorage.getItem("gotrue.user");
        return;
      }
    }
  }
});
