import React, { useState } from 'react'

import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';

import arrowMore from '@/assets/img/CardFavoriteActions/arrowMore.svg'
import { Places } from '@/components/drawer/Places';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { useAuth } from '@/hooks/useAuth';
import { useRoute } from '@/hooks/useRoute';
import { IFavoriteItem } from '@/interfaces/IFavoriteItem';
import {
    addFavoriteItem, clearDirection, setRouteInfo,
} from '@/store/reducers';
import { ButtonSave } from '@/ui/buttonSave';
import { ButtonTravel } from '@/ui/buttonTravel';
import { deleteFavoriteCard } from '@/utils/firebaseService';

import CardFavoriteStyle from '../styled';
import { CardFavoritePropsMaxSize } from './interfaces';
import DoesntExistPhoto from '/public/doesntExist.png'


const CardFavoriteMaxSize: React.FC<CardFavoritePropsMaxSize> = ({ favoriteItem, handleSetIsOpen }) => {
    const { id } = useAuth()
    const [isAdd, setIsAdd] = useState(false)
    const dispatch = useAppDispatch()
    const coordinatesArray = favoriteItem.coordinates.toString()
        .slice(1, -1)
        .split(', ');
    const destination = {
        lat: Number(coordinatesArray[0]) || 0,
        lng: Number(coordinatesArray[1]) || 0
    }
    const handleDeleteFavorite = (favoirteItem: IFavoriteItem) => {
        setIsAdd(true)
        if (id != null) {
            dispatch(addFavoriteItem(favoirteItem))
            deleteFavoriteCard(favoirteItem.id, id).then(() => setIsAdd(false))
        }
    }
    const userLocation = useTypeSelector(state => state.currentPosition.humanPosition)
    const map = useTypeSelector(state => state.map.mapRef)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const { directions, distanceTotal, placeLocation, time } = useRoute({ origin: userLocation, destination: destination })
    const handleClickRoute = async () => {
        dispatch(clearDirection())
        const directionsRenderer = new google.maps.DirectionsRenderer({ map, directions })
        dispatch(setRouteInfo({ directionsRenderer, distanceTotal, placeLocation, time }))
    }


    const useCardFavoriteStyle = CardFavoriteStyle({ isOpen: true, url: favoriteItem.img, Pallete: pallete })
    return (
        <>
            <Card data-testid='card-max-size' className={useCardFavoriteStyle.classes.cardFavorite}>
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
                <CardActions className={useCardFavoriteStyle.classes.containerDownIcons}>
                    <ButtonSave data-testid='delete-from-favorite' isLoading={isAdd} handleClick={() => handleDeleteFavorite(favoriteItem)} isFavorite={true} />
                    <ButtonTravel handleClick={handleClickRoute} />
                    <img onClick={() => handleSetIsOpen(false)} className={useCardFavoriteStyle.classes.imgArrowDown} title={'toggle drawer'} src={arrowMore} alt={DoesntExistPhoto} />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteMaxSize
