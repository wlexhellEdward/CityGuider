import CardFavoriteMaxSize from './CardFavoriteMaxSize';
import CardFavoriteNormalSize from './CardFavoriteNormalSize';

import React from 'react'

interface CardFavoriteProps {
    favoriteItem: {
        id: number;
        img: string;
        title: string;
        description: string;
        isFavorite: boolean;
        currentStatus: string[];
    };
    handleDeleteFavorite: (id: number) => void;
}



const CardFavorite: React.FC<CardFavoriteProps> = ({ favoriteItem, handleDeleteFavorite }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    function handleSetIsOpen(status: boolean) {
        setIsOpen(status)
    }
    return (
        isOpen ?
            <CardFavoriteMaxSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} handleDeleteFavorite={handleDeleteFavorite} />
            :
            <CardFavoriteNormalSize favoriteItem={favoriteItem} handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} handleDeleteFavorite={handleDeleteFavorite} />

    )
}



export default CardFavorite