import DoesntExistPhoto from '/public/doesntExist.png'

export const convertPlaceToFavorite = (place: google.maps.places.PlaceResult) => {
    const coordinates = place.geometry?.location || new google.maps.LatLng(0, 0);
    return {
        id: place.place_id,
        type: place.types || [''],
        coordinates: coordinates,
        img: place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : DoesntExistPhoto,
        title: place.name || "title",
        description: place.vicinity || "description"
    }
}

export const passwordToStrength = (password: string) => {
    let strength = 0;
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(password)) {
        strength += 1 / 3;
    }
    const digitRegex = /\d/;
    if (digitRegex.test(password)) {
        strength += 1 / 3;
    }
    const minLength = 6;
    if (password.length >= minLength) {
        strength += 1 / 3;
    }

    return strength * 100;
};
