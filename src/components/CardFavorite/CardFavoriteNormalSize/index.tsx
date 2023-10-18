import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';
import arrowMore from 'assets/img/CardFavoriteActions/arrowMore.svg'
import FavoriteImg from 'assets/img/CardFavoriteActions/inFavorite.svg'
import { Places } from 'components/Drawer/Places';
import { useAppDispatch } from 'hooks/redux';
import { IFavoriteItem } from 'models/IFavoriteItem';
import React from 'react'
import { addFavoriteItem } from 'store/reducers';

import DoesntExistPhoto from '/public/doesntExist.png'

import CardFavoriteStyle from '../styled';
import { CardFavoritePropsNormalSize } from './interfaces.ts';

const CardFavoriteNormalSize: React.FC<CardFavoritePropsNormalSize> = ({ favoriteItem, handleSetIsOpen }) => {
    const dispatch = useAppDispatch()
    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))
    const useCardFavoriteStyle = CardFavoriteStyle(false, favoriteItem.img)()

    return (
        <>
            <Card className={useCardFavoriteStyle.classes.cardFavorite}>
                <Box className={useCardFavoriteStyle.classes.containerImgTitle} >
                    <CardContent className={useCardFavoriteStyle.classes.cardContent}>
                        <Box className={useCardFavoriteStyle.classes.imgCard}>
                            {favoriteItem.type.map((item) => {
                                const matchingPlace = Places.find((place) => place.type === item);
                                if (matchingPlace) {
                                    const [title, img] = [matchingPlace.title, matchingPlace.img];
                                    return (
                                        <img
                                            alt={DoesntExistPhoto}
                                            title='place icon'
                                            key={title}
                                            className={useCardFavoriteStyle.classes.iconStatis}
                                            src={img}
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
