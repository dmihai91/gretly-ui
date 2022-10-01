import { definitions } from '@/types/supabase';
import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { ApiError, Session, User } from '@supabase/supabase-js';
import { ActionsTypes, MutationsTypes, SignInProviders } from './types';
import { supabase } from '@/utils/supabase';
import { BASE_URL } from '@/utils/env';
import { LoginInfo } from '@/store/auth/interfaces/LoginInfo';
import { RegisterInfo } from '@/store/auth/interfaces/RegisterInfo';

type GretlyUser = User & {
  name?: string;
  profileImage?: string;
}

export interface AuthState {
  user: GretlyUser;
  session: Session;
}

export const state = (): AuthState => ({
  user: null,
  session: null,
});

export const getters = getterTree(state, {
  loggedIn(state) {
    return Boolean(state.session && true);
  },
});

export const mutations = mutationTree(state, {
  [MutationsTypes.SET_USER](state, user: GretlyUser) {
    state.user = user;
  },
  [MutationsTypes.SET_SESSION](state, session: Session) {
    state.session = session;
  },
  [MutationsTypes.RESET_STATE](state) {
    state.user = null;
    state.session = null;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async [ActionsTypes.SET_SESSION](
      { commit },
      { user, session, error }: { user: User; session: Session; error: ApiError }
    ) {
      if (error) throw error;

      const { data } = await supabase
        .from<definitions['user_profiles']>('user_profiles').select('name, avatar_url')
        .eq("user_id", user.id)
        .single();
        
      commit(MutationsTypes.SET_USER, { ...user, name: data.name, profileImage: data.avatar_url });
      commit(MutationsTypes.SET_SESSION, session);

      return session;
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
      await supabase.from<definitions['user_profiles']>('user_profiles').insert({
        user_id: user.id,
        updated_at: new Date().toUTCString(),
        name,
      });

      return dispatch(ActionsTypes.SET_SESSION, { user, session, error });
    },

    async [ActionsTypes.SIGN_OUT]({ commit }): Promise<void> {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      commit(MutationsTypes.RESET_STATE);
    },
  
    async [ActionsTypes.SEND_RESET_PASSWORD_EMAIL](_, { email } : { email: string }): Promise<void> {
      const { error } = await supabase.auth.api.resetPasswordForEmail(email, { redirectTo: BASE_URL });

      if (error) throw error;
    }
  }
);
