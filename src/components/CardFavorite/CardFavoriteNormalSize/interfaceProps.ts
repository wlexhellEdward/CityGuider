export interface CardFavoritePropsNormalSize {
    favoriteItem: {
        id: number,
        type: string[],
        img: string,
        coordinates: google.maps.LatLng,
        title: string,
        description: string,
    },
    handleSetIsOpen: (isOpen: boolean) => void,
    isOpen: boolean
}