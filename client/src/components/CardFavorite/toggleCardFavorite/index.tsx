import { useState } from 'react'

import CardFavoriteMaxSize from '../сardFavoriteMaxSize';
import CardFavoriteNormalSize from '../сardFavoriteNormalSize';
import { CardFavoriteProps } from './interfaces';


const CardFavorite = ({ favoriteItem }: CardFavoriteProps) => {
    const [isOpen, setIsOpen] = useState(false)
    function handleSetIsOpen(isOpenStatus: boolean) {
        setIsOpen(isOpenStatus)
    }
    if (isOpen) {
        return (
            <CardFavoriteMaxSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
        )
    } else {
        return (
            <CardFavoriteNormalSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
        )
    }
}



export default CardFavorite