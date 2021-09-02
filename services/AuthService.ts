import { AuthResponse } from '../interfaces/Auth';
import { FBProfile } from '../interfaces/FBProfile';
import { GoogleProfile } from '../interfaces/GoogleProfile';
import { LoginInfo } from '../interfaces/LoginInfo';
import { RegisterInfo } from '../interfaces/RegisterInfo';
import { User } from '../interfaces/User';
import { ApiService } from './ApiService';
import { API_URL, FB_API_URL, GOOGLE_API_URL } from './config';

const SERVICE_URL = API_URL + '/auth';

export const AuthService = {
  /** Login user using his credentials */
  async login(loginInfo: LoginInfo) {
    return await ApiService.post<AuthResponse>(SERVICE_URL + '/login', loginInfo);
  },

  /** Register the user using email and password */
  async register(registerInfo: RegisterInfo) {
    return await ApiService.post<AuthResponse>(SERVICE_URL + '/register', registerInfo);
  },

  async authWithFacebook(accessToken: string, fbProfile: FBProfile, action: string) {
    return await ApiService.post<AuthResponse>(
      SERVICE_URL + '/auth-with-facebook',
      {
        accessToken: accessToken,
        ...fbProfile,
      },
      {
        params: {
          action,
        },
      }
    );
  },

  async authWithGoogle(accessToken: string, googleProfile: GoogleProfile, action: String) {
    return await ApiService.post<AuthResponse>(
      SERVICE_URL + '/auth-with-google',
      {
        accessToken: accessToken,
        ...googleProfile,
      },
      {
        params: {
          action,
        },
      }
    );
  },

  async getFBUserData(accessToken: string) {
    return await ApiService.get<FBProfile>(FB_API_URL + `/me?fields=name,email,picture&access_token=${accessToken}`);
  },

  async getGoogleUserData(accessToken: string) {
    return await ApiService.get<GoogleProfile>(GOOGLE_API_URL + `/userinfo?alt=json&access_token=${accessToken}`);
  },

  setToken(accessToken: string) {
    ApiService.setToken(accessToken);
  },

  async getUserData() {
    return await ApiService.get<User>(SERVICE_URL + '/get-auth-user');
  },

  async refreshToken(permanentSession: boolean) {
    return await ApiService.post<AuthResponse>(SERVICE_URL + '/refresh-token', {
      params: {
        permanentSession,
      },
    });
  },

  async logout() {
    await ApiService.post(SERVICE_URL + '/logout');
    ApiService.removeToken();
  },
};
