import { createStore } from 'vuex';

export default createStore({
  state: {
    positionName: '',
    positionId: null,
  },
  mutations: {
    setResumeData(state, { positionName, positionId }) {
      state.positionName = positionName;
      state.positionId = positionId;
    },
  },
});
