import { LoginInfo } from '@/store/types/interfaces/LoginInfo';
import { RegisterInfo } from '@/store/types/interfaces/RegisterInfo';

export const AuthService = {
  async login(loginInfo: LoginInfo): Promise<void> {},
  async register(registerInfo: RegisterInfo): Promise<void> {},
};
