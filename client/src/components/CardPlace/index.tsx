import { memo, useState } from 'react'
import { toast } from 'react-toastify';

import { Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material'

import { PopUp } from '@/components/Pop-up/index.tsx';
import { ERRORS, SUCCESES } from '@/constants/consts';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { useAuth } from '@/hooks/useAuth.ts';
import { useRoute } from '@/hooks/useRoute.ts';
import {
    addFavoriteItem, clearDirection, setRouteInfo
} from '@/store/reducers'
import { ButtonSave } from '@/ui/ButtonSave/index.tsx';
import { ButtonTravel } from '@/ui/ButtonTravel/index.tsx';
import { convertPlaceToFavorite } from '@/utils/converts/convert.ts'
import { addFavoriteCard, deleteFavoriteCard } from '@/utils/services/firebaseService.ts';

import 'react-toastify/dist/ReactToastify.css';
import { errors, titles } from './config.ts';
import { CardPlaceProps } from './interfaces.ts';
import CardPlaceStyle from './styled.ts'
import DoesntExistPhoto from '/public/doesntExist.png'

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
    const handleSetFavorite = async () => {
        const favoirteItem = convertPlaceToFavorite(place)
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
                        title={titles.media}
                    />
                </CardMedia>
                <CardContent className={useCardPlaceStyle.classes.cardContent}>
                    <Typography className={useCardPlaceStyle.classes.title}>{place.name}</Typography>
                    <Typography className={useCardPlaceStyle.classes.placeAdress}>{place.vicinity}</Typography>
                </CardContent>
                <CardActions className={useCardPlaceStyle.classes.cardActions}>
                    <ButtonSave handleClick={handleSetFavorite} isLoading={isAdding} isFavorite={isFavorite()} />
                    <ButtonTravel handleClick={() => {
                        if (place.geometry?.location != null && map != null) {
                            handleClickRoute()
                        } else {
                            <PopUp text={errors.placeWithoutCoorginates} />
                        }
                    }
                    } />
                </CardActions>
            </Card>
        )
    }
    return (
        <PopUp text={errors.errorInRenderCardPlace} />
    )

}

export default memo(CardPlace)