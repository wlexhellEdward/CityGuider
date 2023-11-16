export interface CardFavoriteProps {
  favoriteItem: {
    id: string | undefined;
    type: string[];
    img: string;
    coordinates: google.maps.LatLng;
    title: string;
    description: string;
  };
}
