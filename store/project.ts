// manage data and API operations for 'Project' db collection

import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Project } from '~/interfaces/Project';

export const state = () => ({});

export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});
