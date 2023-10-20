import DoesntExistPhoto from 'public/doesntExist.png'


export const convertPlaceToFavorite = (place: google.maps.places.PlaceResult) => {
    const coordinates = place.geometry?.location || new google.maps.LatLng(0, 0);
    return {
        id: Number(place.place_id) || 1,
        type: place.types || [''],
        coordinates: coordinates,
        img: place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : DoesntExistPhoto,
        title: place.name || "title",
        description: place.vicinity || "description"
    }
}

