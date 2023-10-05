import CardFavoriteStyle from './CardFavoriteStyle';
import arrowMore from '../../assets/img/arrowMore.svg'
import FavoriteImg from '../../assets/img/inFavorite.svg'
import { Places } from '../Drawer/Places';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { IFavoriteItem } from '../../models/IFavoriteItem';

import React from 'react'
import { Container, Card, Box, Typography, CardContent, CardActions, } from '@mui/material';
import { addFavoriteItem } from '../../store/reducers';


interface CardFavoriteProps {
    favoriteItem: {
        id: number,
        type: string[],
        img: string,
        title: string,
        description: string,
    }
    handleSetIsOpen: (status: boolean) => void;
    isOpen: boolean;
}



const CardFavoriteNormalSize: React.FC<CardFavoriteProps> = ({ favoriteItem, handleSetIsOpen }) => {
    const dispatch = useAppDispatch()
    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))
    const useCardFavoriteStyle = CardFavoriteStyle(false, favoriteItem.img)()
    console.log(favoriteItem)
    return (
        <>
            <Card className={useCardFavoriteStyle.classes.cardFavorite}>
                <Box className={useCardFavoriteStyle.classes.containerImgTitle} >
                    <CardContent className={useCardFavoriteStyle.classes.cardContent}>
                        <Box className={useCardFavoriteStyle.classes.imgCard}>
                            {favoriteItem.type.map((item) => {
                                const matchingPlace = Places.find((place) => place.type === item);
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
                    <img src={FavoriteImg} onClick={() => handleAddToFavorite(favoriteItem)} className={useCardFavoriteStyle.classes.icon} />
                    <img onClick={() => handleSetIsOpen(true)} className={useCardFavoriteStyle.classes.imgArrow} src={arrowMore} alt="" />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteNormalSize
