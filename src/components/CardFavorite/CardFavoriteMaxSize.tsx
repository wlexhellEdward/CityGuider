import CardFavoriteStyle from './CardFavoriteStyle';
import arrowMore from '../../assets/img/arrowMore.svg'
import { Places } from '../Drawer/Places';
import { IFavoriteItem } from '../../models/IFavoriteItem';
import ButtonTravel from '../../GUI/ButtonTravel/ButtonTravel';
import ButtonSave from '../../GUI/ButtonSave/ButtonSave';
import { makeRoute } from '../../utils/route';
import React from 'react'
import { Container, Card, Box, Typography, CardContent, CardActions, } from '@mui/material';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { addFavoriteItem } from '../../store/reducers';

interface CardFavoriteProps {
    favoriteItem: {
        id: number,
        type: string[],
        img: string,
        coordinates: google.maps.LatLng,
        title: string,
        description: string,
    }
    handleSetIsOpen: (status: boolean) => void;
    isOpen: boolean;
}



const CardFavoriteMaxSize: React.FC<CardFavoriteProps> = ({ favoriteItem, handleSetIsOpen }) => {

    const dispatch = useAppDispatch()
    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const map = useTypeSelector(state => state.map.map)




    const useCardFavoriteStyle = CardFavoriteStyle(true, favoriteItem.img)()
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
                <CardActions className={useCardFavoriteStyle.classes.containerDownIcons}>
                    <ButtonSave handleFunction={() => handleAddToFavorite(favoriteItem)} isFavorite={true} />
                    <ButtonTravel handleFunction={() => {
                        if (map != null) {
                            makeRoute({ start: center, map: map, end: favoriteItem.coordinates })
                        }
                    }
                    } />
                    <img onClick={() => handleSetIsOpen(false)} className={useCardFavoriteStyle.classes.imgArrowDown} src={arrowMore} alt="" />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteMaxSize
