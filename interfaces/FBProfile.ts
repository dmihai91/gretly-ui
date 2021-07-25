export interface FBProfile {
	id: string;
	email: string;
	name: string;
	picture: {
		data: {
			width: number;
			is_silhouette: boolean;
			height: number;
			url: string;
		};
	};
}
