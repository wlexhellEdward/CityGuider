import { memo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material'

import { PopUp } from '@/components/pop-up';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { useAuth } from '@/hooks/useAuth.ts';
import { useRoute } from '@/hooks/useRoute.ts';
import { IFavoriteItem } from '@/interfaces/IFavoriteItem.ts'
import {
    addFavoriteItem, clearDirection, setRouteInfo
} from '@/store/reducers'
import { ButtonSave } from '@/ui/buttonSave';
import { ButtonTravel } from '@/ui/buttonTravel';
import { convertPlaceToFavorite } from '@/utils/convert'
import { addFavoriteCard, deleteFavoriteCard } from '@/utils/firebaseService.ts';

import { CardPlaceProps } from './interfaces.ts';
import CardPlaceStyle from './styled.ts'
import DoesntExistPhoto from '/public/doesntExist.png'
import { ERRORS, SUCCESES } from '@/utils/consts.tsx';

const checkValidPhoto = (place: google.maps.places.PlaceResult) => {
    return place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : DoesntExistPhoto
}

const CardPlace = ({ place }: CardPlaceProps) => {
    const dispatch = useAppDispatch()
    const { id } = useAuth()
    const userLocation = useTypeSelector(state => state.currentPosition.position)
    const favoriteItems = useTypeSelector(state => state.favoriteItems.favoriteItems)
    const destination = {
        lat: place?.geometry?.location?.lat() || 0,
        lng: place?.geometry?.location?.lng() || 0
    }
    const [isAdding, setIsAdding] = useState(false)
    const map = useTypeSelector(state => state.map.mapRef)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const isFavorite = () => {
        return favoriteItems.some(item => item.id == place.place_id)
    }
    const handleSetFavorite = async (favoirteItem: IFavoriteItem) => {
        setIsAdding(true)
        if (id != null && !isFavorite()) {
            addFavoriteCard(favoirteItem, id)
                .then(() => {
                    setIsAdding(false)
                    dispatch(addFavoriteItem(favoirteItem))
                    toast(SUCCESES.ADD_PLACE, { type: 'success' });
                })
                .catch(() => {
                    toast(ERRORS.CANT_ADD_PLACE, { type: 'error' });
                })
        } else if (id != null && isFavorite()) {
            deleteFavoriteCard(favoirteItem.id, id)
                .then(() => {
                    setIsAdding(false)
                    dispatch(addFavoriteItem(favoirteItem))
                    toast(SUCCESES.DELETE_PLACE, { type: 'success' });
                })
                .catch(() => {
                    toast(ERRORS.CANT_DELETE_PLACE, { type: 'error' });
                })
        }
    }
    const { directions, distanceTotal, placeLocation, time } = useRoute({ origin: userLocation, destination: destination })
    const handleClickRoute = async () => {
        dispatch(clearDirection())
        const directionsRenderer = new google.maps.DirectionsRenderer({ map, directions })
        dispatch(setRouteInfo({ directionsRenderer, distanceTotal, placeLocation, time }))
    }
    const useCardPlaceStyle = CardPlaceStyle({ Pallete: pallete })

    if (place != undefined) {
        return (
            <Card className={useCardPlaceStyle.classes.cardPlace}>
                <CardMedia>
                    <img
                        className={useCardPlaceStyle.classes.placePhoto}
                        src={checkValidPhoto(place)}
                        alt={DoesntExistPhoto}
                        title='place photo'
                    />
                </CardMedia>
                <CardContent className={useCardPlaceStyle.classes.cardContent}>
                    <Typography className={useCardPlaceStyle.classes.title}>{place.name}</Typography>
                    <Typography className={useCardPlaceStyle.classes.placeAdress}>{place.vicinity}</Typography>
                </CardContent>
                <CardActions className={useCardPlaceStyle.classes.cardActions}>
                    <ButtonSave handleClick={() => handleSetFavorite(convertPlaceToFavorite(place))} isLoading={isAdding} isFavorite={isFavorite()} />
                    <ButtonTravel handleClick={() => {
                        if (place.geometry?.location != null && map != null) {
                            handleClickRoute()
                        } else {
                            <PopUp text={"У данного места нету координат"} />
                        }
                    }
                    } />
                </CardActions>
            </Card>
        )
    } else {
        return (
            <PopUp text={"Ошибка в обработке данных по данному месту"} />
        )
    }
}

export default memo(CardPlace)