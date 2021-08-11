import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { ActionsTypes, MutationsTypes } from './types/auth';

import { ApiError } from '~/interfaces/ApiError';
import { AuthResponse } from '~/interfaces/Auth';
import { LoginInfo } from '~/interfaces/LoginInfo';
import { User } from '~/interfaces/User';
import { UserSession } from '~/interfaces/UserSession';

import { AuthService } from '~/services/AuthService';
import { SessionService } from '~/services/SessionService';

export const state = () => ({
	loggedIn: false,
	user: null as User,
	accessToken: null,
	expiresIn: 0 as AuthResponse['expiresIn']
});

export const getters = getterTree(state, {
	user: (state) => state.user,
	firstName: (state) => (state.user ? state.user.name.split(' ')[0] : null)
});

export const mutations = mutationTree(state, {
	[MutationsTypes.SET_LOGGED_IN](state, bValue: boolean) {
		state.loggedIn = bValue;
	},
	[MutationsTypes.SET_USER](state, user: User) {
		state.user = user;
	},
	[MutationsTypes.SET_TOKEN](
		state,
		{ accessToken, expiresIn }: { accessToken: string; expiresIn: AuthResponse['expiresIn'] }
	) {
		state.accessToken = accessToken;
		state.expiresIn = expiresIn;
	},
	[MutationsTypes.SET_SESSION](_state, { sessionId, isPermanent }: { sessionId: string; isPermanent: boolean }) {
		SessionService.setSession(sessionId, isPermanent);
	}
});

export const actions = actionTree(
	{ state, getters, mutations },
	{
		async [ActionsTypes.LOGIN]({ dispatch }, loginInfo: LoginInfo) {
			const response = await AuthService.login(loginInfo);
			dispatch(ActionsTypes.SET_AUTH_USER, {
				accessToken: response.accessToken,
				expiresIn: response.expiresIn,
				sessionId: response.sessionId,
				isPermanent: loginInfo.rememberMe
			});
			dispatch(ActionsTypes.FETCH_USER_DATA);
		},
		async [ActionsTypes.AUTH_WITH_FB]({ dispatch }, token: string) {
			const fbProfile = await AuthService.getFBUserData(token);
			const response = await AuthService.authWithFacebook(token, fbProfile);
			dispatch(ActionsTypes.SET_AUTH_USER, {
				accessToken: response.accessToken,
				expiresIn: response.expiresIn,
				sessionId: response.sessionId,
				isPermanent: true
			});
			dispatch(ActionsTypes.FETCH_USER_DATA);
		},
		async [ActionsTypes.AUTH_WITH_GOOGLE]({ dispatch }, token: string) {
			const googleProfile = await AuthService.getGoogleUserData(token);
			const response = await AuthService.authWithGoogle(token, googleProfile);
			dispatch(ActionsTypes.SET_AUTH_USER, {
				accessToken: response.accessToken,
				expiresIn: response.expiresIn,
				sessionId: response.sessionId,
				isPermanent: true
			});
			dispatch(ActionsTypes.FETCH_USER_DATA);
		},
		async [ActionsTypes.FETCH_USER_DATA]({ commit, state }) {
			if (!state.loggedIn) {
				throw new Error("Can't fetch data for a non auth user");
			}
			const user = await AuthService.getLoggedUser();
			commit(MutationsTypes.SET_USER, user);
		},
		[ActionsTypes.SET_USER_SESSION]({ commit }, data: UserSession) {
			commit(MutationsTypes.SET_TOKEN, { accessToken: data.accessToken, expiresIn: data.expiresIn });
			commit(MutationsTypes.SET_SESSION, { sessionId: data.sessionId, isPermanent: data.isPermanent });
		},
		[ActionsTypes.SET_AUTH_USER]({ commit, dispatch }, data: UserSession) {
			commit(MutationsTypes.SET_LOGGED_IN, true);
			AuthService.setToken(data.accessToken);
			dispatch(ActionsTypes.SET_USER_SESSION, {
				accessToken: data.accessToken,
				expiresIn: data.expiresIn,
				sessionId: data.sessionId,
				isPermanent: true
			});
		},
		async [ActionsTypes.REFRESH_TOKEN]({ dispatch }) {
			const authResponse = await AuthService.refreshToken();
			dispatch(ActionsTypes.SET_AUTH_USER, {
				accessToken: authResponse.accessToken,
				expiresIn: authResponse.expiresIn,
				sessionId: authResponse.sessionId,
				isPermanent: SessionService.isPermanent
			});
		},
		[ActionsTypes.LOGOUT]({ commit }) {
			AuthService.logout();
			commit(MutationsTypes.SET_LOGGED_IN, false);
			commit(MutationsTypes.SET_USER, null);
			commit(MutationsTypes.SET_TOKEN, { accessToken: null, expiresIn: 0 });
			AuthService.revokeToken();
			SessionService.resetSession();
		}
	}
);
