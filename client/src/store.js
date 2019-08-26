import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    me: null,
    him: null
  },
  mutations: {
    setMe(state, me) {
      state.me = me;
    },
    setHim(state, him) {
      state.him = him;
    }
  },
  actions: {
    setMatch(context, match) {
      return new Promise(resolve => {
        context.commit("setMe", match.me);
        context.commit("setHim", match.him);
        resolve();
      });
    }
  }
});
