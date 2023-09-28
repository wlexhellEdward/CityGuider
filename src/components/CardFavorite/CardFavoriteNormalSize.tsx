import CardFavoriteStyle from './CardFavoriteStyle';
import arrowMore from '../../assets/img/arrowMore.svg'
import FavoriteImg from '../../assets/img/inFavorite.svg'
import getPlaces from '../Drawer/Places';

import React from 'react'
import { Container, Card, Box, Typography, CardContent, CardActions, } from '@mui/material';

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
    handleSetIsOpen: (status: boolean) => void;
    isOpen: boolean;
}



const CardFavoriteNormalSize: React.FC<CardFavoriteProps> = ({ favoriteItem, handleDeleteFavorite, handleSetIsOpen }) => {
    const useCardFavoriteStyle = CardFavoriteStyle(false, favoriteItem.img)()
    return (
        <>
            <Card className={useCardFavoriteStyle.classes.cardFavorite}>
                <Box className={useCardFavoriteStyle.classes.containerImgTitle} >
                    <CardContent className={useCardFavoriteStyle.classes.cardContent}>
                        <Box className={useCardFavoriteStyle.classes.imgCard}>
                            {favoriteItem.currentStatus.map((item) => {
                                const matchingPlace = getPlaces().find((place) => place.title === item);
                                if (matchingPlace) {
                                    return (
                                        <img
                                            key={matchingPlace.title}
                                            className={useCardFavoriteStyle.classes.iconStatis}
                                            src={matchingPlace.img}
                                        />
                                    );
                                }
                            })}
                        </Box>
                        <Box className={useCardFavoriteStyle.classes.containerTitle}>
                            <Typography whiteSpace={'normal'} className={useCardFavoriteStyle.classes.title}>{favoriteItem.title}</Typography>
                        </Box>
                    </CardContent>
                </Box>

                <Container className={useCardFavoriteStyle.classes.descriptionContainer} disableGutters>
                    <Typography whiteSpace={'normal'} className={useCardFavoriteStyle.classes.description}>{favoriteItem.description.substring(0, 150) + '...'}</Typography>
                </Container>
                <CardActions disableSpacing className={useCardFavoriteStyle.classes.containerDownIcons}>
                    <img src={FavoriteImg} onClick={()=>handleDeleteFavorite(favoriteItem.id)} className={useCardFavoriteStyle.classes.icon} />
                    <img onClick={() => handleSetIsOpen(true)} className={useCardFavoriteStyle.classes.imgArrow} src={arrowMore} alt="" />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteNormalSize
