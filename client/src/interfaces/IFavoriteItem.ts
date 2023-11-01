export interface IFavoriteItem {
    id: string | undefined,
    type: string[],
    img: string,
    coordinates: google.maps.LatLng,
    title: string,
    description: string,
}