export enum MutationsTypes {
	SET_LOGGED_IN = 'setLoggedIn',
	SET_LOGIN_STRATEGY = 'setLoginStrategy',
	SET_SESSION = 'setSession',
	SET_REFRESH_TOKEN = 'setRefreshToken',
	SET_USER = 'setUser',
	SET_TOKEN = 'setToken'
}

export enum ActionsTypes {
	LOGIN = 'login',
	AUTH_WITH_FB = 'authWithFb',
	AUTH_WITH_GOOGLE = 'authWithGoogle',
	REFRESH_TOKEN = 'refreshToken',
	LOGOUT = 'logout',
	FETCH_USER_DATA = 'fetchUserData',
	SET_USER_SESSION = 'setUserSession',
	SET_AUTH_USER = 'setAuthUser'
}

export enum LoginStrategies {
	LOCAL = 'local',
	FACEBOOK = 'facebook',
	GOOGLE = 'google'
}
