import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Project } from '~/interfaces/Project';

export const state = () => ({
  data: [] as Project[],
  currentProject: null as Project,
});

export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});
