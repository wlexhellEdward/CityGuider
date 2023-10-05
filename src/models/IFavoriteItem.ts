export interface IFavoriteItem {
    id: number,
    type: string[],
    img: string,
    coordinates: google.maps.LatLng,
    title: string,
    description: string,
}