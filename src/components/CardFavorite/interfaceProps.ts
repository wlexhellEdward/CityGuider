export interface CardFavoriteProps {
    favoriteItem: {
        id: number,
        type: string[],
        img: string,
        coordinates: google.maps.LatLng,
        title: string,
        description: string,
    }

}