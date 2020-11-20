const state = {};
const mutations = {
  setFalse({ rootState }) {
    rootState.isLoading = false;
  },
  setTrue({ rootState }) {
    rootState.isLoading = true;
  }
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
