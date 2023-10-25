export interface CardFavoritePropsNormalSize {
    favoriteItem: {
        id: string | undefined,
        type: string[],
        img: string,
        coordinates: google.maps.LatLng,
        title: string,
        description: string,
    },
    handleSetIsOpen: (isOpen: boolean) => void,
    isOpen: boolean
}