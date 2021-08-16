// manage data and API operations for 'Template' db collection

import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Template } from '~/interfaces/Template';

export const state = () => ({
  // the templates created by the user
});

export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});
