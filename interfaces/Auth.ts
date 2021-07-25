export interface Token {
	accessToken: string;
	refreshToken: string;
	expiresIn: number | Date;
}

export interface AuthResponse extends Token {
	sessionId: string;
}
