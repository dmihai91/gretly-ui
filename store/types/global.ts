export enum MutationsTypes {
	SET_IS_LOADING = 'setIsLoading',
	ADD_NEW_NOTIFICATION = 'addNewNotification',
	ADD_NEW_MESSAGE = 'addNewMessage',
	MARK_NOTIFICATION_AS_READ = 'markNotificationAsRead',
	MARK_MESSAGE_AS_READ = 'markMessageAsRead',
	REMOVE_NOTIFICATION = 'removeNotification',
	SET_LAST_PATH = 'setLastPath'
}

export enum ActionsTypes {
	TOGGLE_IS_LOADING = 'toggleIsLoading',
	NOTIFICATION_RECEIVED = 'notificationReceived',
	MESSAGE_RECEIVED = 'messageReceived',
	SEND_MESSAGE = 'sendMessage',
	DISMISS_NOTIFICATION = 'dismissNotification',
	DISMISS_MESSAGE = 'dismissMessage'
}
