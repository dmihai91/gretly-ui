export interface FBProfile {
  id: string;
  email: string;
  name: string;
  picture: {
    data: {
      width: number;
      // eslint-disable-next-line camelcase
      is_silhouette: boolean;
      height: number;
      url: string;
    };
  };
}
