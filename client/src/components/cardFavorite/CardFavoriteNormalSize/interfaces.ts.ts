export interface CardFavoritePropsNormalSize {
    favoriteItem: {
        id: string | undefined,
        type: string[],
        img: string,
        coordinates: google.maps.LatLng,
        title: string,
        description: string,
    },
    handleSetIsOpen: () => void,
    isOpen: boolean
}