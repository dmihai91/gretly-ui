import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { ActionsTypes, MutationsTypes } from './types/global';
import { Notification } from '~/interfaces/Notification';
import { Message } from '~/interfaces/Message';

// import modules
import * as auth from './auth';
import * as projects from './projects';
import * as user from './user';
import * as templates from './templates';

// global state
export const state = () => ({
	isLoading: false,
	notifications: [] as Notification[],
	readNotifications: [] as Notification[],
	messages: [] as Message[],
	readMessages: [] as Message[],
	lastPath: null
});

export type RootState = ReturnType<typeof state>;

// global getters
export const getters = {};

// global mutations
export const mutations = mutationTree(state, {
	[MutationsTypes.SET_IS_LOADING](state, value: boolean) {
		state.isLoading = value;
	},
	[MutationsTypes.ADD_NEW_NOTIFICATION](state, notification: Notification) {
		state.notifications.push(notification);
	},
	[MutationsTypes.ADD_NEW_MESSAGE](state, message: Message) {
		state.messages.push(message);
	},
	[MutationsTypes.MARK_NOTIFICATION_AS_READ](state, idx: number) {
		state.readNotifications.push(state.notifications[idx]);
	},
	[MutationsTypes.MARK_MESSAGE_AS_READ](state, idx: number) {
		state.readMessages.push(state.messages[idx]);
	},
	[MutationsTypes.SET_LAST_PATH](state, lastPath: string) {
		state.lastPath = lastPath;
	}
});

// global actions
export const actions = actionTree(
	{ state, getters, mutations },
	{
		[ActionsTypes.TOGGLE_IS_LOADING]({ state, commit }) {
			commit(MutationsTypes.SET_IS_LOADING, !state.isLoading);
		},
		[ActionsTypes.NOTIFICATION_RECEIVED]({ commit }, notification: Notification) {
			commit(MutationsTypes.ADD_NEW_NOTIFICATION, notification);
		}
	}
);

export const accessorType = getAccessorType({
	actions,
	getters,
	mutations,
	state,
	modules: {
		auth,
		projects,
		user,
		templates
	}
});
