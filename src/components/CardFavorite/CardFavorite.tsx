import CardFavoriteMaxSize from './CardFavoriteMaxSize';
import CardFavoriteNormalSize from './CardFavoriteNormalSize';
import React from 'react'


interface CardFavoriteProps {
    favoriteItem: {
        id: number,
        type: string[],
        img: string,
        title: string,
        description: string,
    }
}


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