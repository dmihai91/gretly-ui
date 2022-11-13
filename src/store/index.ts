import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { ActionsTypes, MutationsTypes } from './types/global';

// import modules
import auth from './auth';

// global state
export const state = () => ({
  isLoading: false,
  lastPath: '',
  headerBackground: 'light',
  theme: 'light',
});

export type RootState = ReturnType<typeof state>;

// global getters
export const getters = {};

// global mutations
export const mutations = mutationTree(state, {
  [MutationsTypes.SET_IS_LOADING](state, value: boolean) {
    state.isLoading = value;
  },
  [MutationsTypes.SET_LAST_PATH](state, lastPath: string) {
    state.lastPath = lastPath;
  },
  [MutationsTypes.UPDATE_HEADER_BACKGROUND](state, headerBackground: string) {
    if (!['light', 'dark'].includes(headerBackground)) {
      throw new Error('Header background should be either light or dark');
    }
    state.headerBackground = headerBackground;
  },
});

// global actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    [ActionsTypes.TOGGLE_IS_LOADING]({ state, commit }) {
      commit(MutationsTypes.SET_IS_LOADING, !state.isLoading);
    },
    [ActionsTypes.SET_HEADER_BACKGROUND]({ commit }, headerBackground: string) {
      commit(MutationsTypes.UPDATE_HEADER_BACKGROUND, headerBackground);
    },
  }
);

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    auth,
  },
});
