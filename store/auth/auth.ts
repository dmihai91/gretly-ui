import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { ApiError, Session, User } from '@supabase/supabase-js';
import { ActionsTypes, MutationsTypes, SignInProviders } from './types';
import { supabase } from '@/utils/supabase';
import { BASE_URL } from '@/utils/env';
import { LoginInfo } from '@/store/auth/interfaces/LoginInfo';
import { RegisterInfo } from '@/store/auth/interfaces/RegisterInfo';

export interface AuthState {
  user: User;
  session: Session;
}

export const state = (): AuthState => ({
  user: null,
  session: null,
});

export const getters = getterTree(state, {});

export const mutations = mutationTree(state, {
  [MutationsTypes.SET_USER](state, user: User) {
    state.user = user;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    [ActionsTypes.SET_SESSION](
      { commit },
      { user, session, error }: { user: User; session: Session; error: ApiError }
    ) {
      if (!error) {
        commit(MutationsTypes.SET_USER, user);
        return session;
      }

      throw error;
    },

    async [ActionsTypes.SIGN_IN]({ dispatch }, { email, password }: LoginInfo): Promise<Session> {
      const { user, session, error } = await supabase.auth.signIn({ email, password }, { redirectTo: BASE_URL });

      return dispatch(ActionsTypes.SET_SESSION, { user, session, error })
    },

    async [ActionsTypes.SIGN_IN_WITH_GOOGLE]({ dispatch }) {
      const { user, session, error } = await supabase.auth.signIn(
        { provider: SignInProviders.GOOGLE },
        { redirectTo: BASE_URL }
      );

      return dispatch(ActionsTypes.SET_SESSION, { user, session, error });
    },

    async [ActionsTypes.SIGN_IN_WITH_FACEBOOK]({ dispatch }): Promise<Session> {
      const { user, session, error } = await supabase.auth.signIn(
        { provider: SignInProviders.FACEBOOK },
        { redirectTo: BASE_URL }
      );

      return dispatch(ActionsTypes.SET_SESSION, { user, session, error });
    },

    async [ActionsTypes.SIGN_UP]({ dispatch }, { email, password, name }: RegisterInfo): Promise<Session> {
      const { user, session, error } = await supabase.auth.signUp({ email, password }, { redirectTo: BASE_URL });
      
      return dispatch(ActionsTypes.SET_SESSION, { user, session, error });
    },
  }
);
