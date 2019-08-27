import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    me: null,
    him: null,
    joined: false
  },
  mutations: {
    setMe(state, me) {
      state.me = me;
    },
    setHim(state, him) {
      state.him = him;
    },
    setJoined(state, bool) {
      state.joined = bool;
    }
  },
  actions: {
    setMatch(context, match) {
      return new Promise(resolve => {
        context.commit("setMe", match.me);
        context.commit("setHim", match.him);
        resolve();
      });
    },
    joined(context) {
      return new Promise(resolve => {
        context.commit("setJoined", true);
        resolve();
      });
    }
  },
  getters: {
    isMatched(state) {
      return state.him !== null;
    },
    hasJoined(state) {
      return state.joined;
    }
  }
});
