import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';
import arrowMore from 'assets/img/CardFavoriteActions/arrowMore.svg'
import { Places } from 'components/drawer/Places';
import { ButtonSave } from 'ui/buttonSave';
import { ButtonTravel } from 'ui/buttonTravel';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { useAuth } from 'hooks/useAuth';
import { IFavoriteItem } from 'interfaces/IFavoriteItem';
import React, { useState } from 'react'
import { addFavoriteItem, clearDirection, setDirectionRenderer, setTravelDistance, setTravelPlaceGeometry, setTravelTime } from 'store/reducers';
import { deleteFavoriteCard } from 'utils/firebaseService';
import { getDirections } from 'utils/route';

import DoesntExistPhoto from '/public/doesntExist.png'

import CardFavoriteStyle from '../styled';
import { CardFavoritePropsMaxSize } from './interfaces';


const CardFavoriteMaxSize: React.FC<CardFavoritePropsMaxSize> = ({ favoriteItem, handleSetIsOpen }) => {
    const { id } = useAuth()
    const [isAdd, setIsAdd] = useState(false)
    const dispatch = useAppDispatch()
    const handleDeleteFavorite = (favoirteItem: IFavoriteItem) => {
        setIsAdd(true)
        if (id != null) {
            dispatch(addFavoriteItem(favoirteItem))
            deleteFavoriteCard(favoirteItem.id, id).then(() => setIsAdd(false))
        }
    }
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const map = useTypeSelector(state => state.map.mapRef)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const handleClickRoute = async () => {
        try {
            dispatch(clearDirection())

            const directionRequest = {
                origin: center,
                destination: favoriteItem.coordinates,
                travelMode: google.maps.TravelMode.WALKING
            }

            const result = await getDirections(directionRequest)
            const distance = result?.routes[0].legs[0].distance?.value || 0
            const time = result?.routes[0].legs[0].duration?.text || ''

            const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
                directions: result
            })

            dispatch(setTravelDistance(distance))
            dispatch(setTravelPlaceGeometry(favoriteItem.coordinates))
            dispatch(setTravelTime(time))
            dispatch(setDirectionRenderer(directionsRenderer))
        } catch (e) {
            console.log(e);
        }
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
                    <ButtonSave data-testid='delete-from-favorite' isLoading={isAdd} handleFunction={() => handleDeleteFavorite(favoriteItem)} isFavorite={true} />
                    <ButtonTravel handleFunction={handleClickRoute} />
                    <img onClick={() => handleSetIsOpen(false)} className={useCardFavoriteStyle.classes.imgArrowDown} title={'toggle drawer'} src={arrowMore} alt={DoesntExistPhoto} />
                </CardActions>
            </Card>

        </>
    )
}


export default CardFavoriteMaxSize
