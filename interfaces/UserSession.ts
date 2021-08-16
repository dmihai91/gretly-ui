export interface UserSession {
  accessToken: string;
  expiresIn: Date | number;
  sessionId: string;
  isPermanent: boolean;
}
