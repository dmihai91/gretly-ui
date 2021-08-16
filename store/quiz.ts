// manage data and API operations for 'Quiz' db collection

import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex';

export const state = () => ({});

export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});
