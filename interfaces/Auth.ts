export interface Token {
  accessToken: string;
  expiresIn: number | Date;
}

export interface AuthResponse extends Token {
  sessionId: string;
}
