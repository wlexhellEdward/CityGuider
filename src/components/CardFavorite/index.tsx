import React from 'react'

import CardFavoriteMaxSize from './CardFavoriteMaxSize';
import CardFavoriteNormalSize from './CardFavoriteNormalSize';
import { CardFavoriteProps } from './interfaceProps';





const CardFavorite = ({ favoriteItem }: CardFavoriteProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    function handleSetIsOpen(status: boolean) {
        setIsOpen(status)
    }
    return (
        isOpen ?
            <CardFavoriteMaxSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
            :
            <CardFavoriteNormalSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
    )
}



export default CardFavorite