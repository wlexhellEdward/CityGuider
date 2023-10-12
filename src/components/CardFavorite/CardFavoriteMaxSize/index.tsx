import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';
import arrowMore from 'assets/img/arrowMore.svg'
import { Places } from 'components/Drawer/Places';
import ButtonSave from 'GUI/ButtonSave';
import ButtonTravel from 'GUI/ButtonTravel';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { IFavoriteItem } from 'models/IFavoriteItem';
import React from 'react'
import { addFavoriteItem, clearDirection, setDirectionRenderer, setTravelDistance, setTravelDistanceTraveled, setTravelPlaceGeometry, setTravelTime } from 'store/reducers';
import { getDirections } from 'utils/route';

import DoesntExistPhoto from '/public/doesntExist.jpg'

import CardFavoriteStyle from '../styled';
import { CardFavoritePropsMaxSize } from './interfaceProps';




const CardFavoriteMaxSize: React.FC<CardFavoritePropsMaxSize> = ({ favoriteItem, handleSetIsOpen }) => {

    const dispatch = useAppDispatch()
    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const map = useTypeSelector(state => state.map.mapRef)

    

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
                    <ButtonSave handleFunction={() => handleAddToFavorite(favoriteItem)} isFavorite={true} />
                    <ButtonTravel handleFunction={handleClickRoute} />
                        
                        <img onClick={() => handleSetIsOpen(false)} className={useCardFavoriteStyle.classes.imgArrowDown} title={'toggle drawer'} src={arrowMore} alt={DoesntExistPhoto} />
                </CardActions>
            </Card>

        </>
    )
}


export default CardFavoriteMaxSize
