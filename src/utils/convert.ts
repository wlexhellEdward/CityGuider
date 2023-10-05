export const convertPlaceToFavorite = (place: google.maps.places.PlaceResult) => {
    return {
        id: Number(place.place_id) || 1,
        type: place.types || [''],
        img: place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : "",
        title: place.name || "title",
        description: place.vicinity || "description"
    }
}