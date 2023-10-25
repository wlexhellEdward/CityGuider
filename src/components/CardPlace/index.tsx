import { Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material'
import PopUp from 'components/Pop-up';
import ButtonSave from 'GUI/ButtonSave';
import ButtonTravel from 'GUI/ButtonTravel';
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { useAuth } from 'hooks/useAuth.ts';
import { IFavoriteItem } from 'models/IFavoriteItem'
import DoesntExistPhoto from 'public/doesntExist.png'
import { memo, useState } from 'react'
import { addFavoriteItem, clearDirection, setDirectionRenderer, setTravelDistance, setTravelPlaceGeometry, setTravelTime } from 'store/reducers'
import { convertPlaceToFavorite } from 'utils/convert'
import { AddFavoriteCard, DeleteFavoriteCard } from 'utils/firebase.ts';
import { getDirections } from 'utils/route';

import { CardPlaceProps } from './interfaces.ts';
import CardPlaceStyle from './styled'


const checkValidPhoto = (place: google.maps.places.PlaceResult) => {
    return place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : DoesntExistPhoto
}

const CardPlace = ({ place }: CardPlaceProps) => {
    const dispatch = useAppDispatch()
    const { id } = useAuth()
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const favoriteItems = useTypeSelector(state => state.favoriteItems.favoriteItems).some(item => item.id == place.place_id)
    const [isFavorite, setIsFavorite] = useState(favoriteItems)
    const [isAdd, setIsAdd] = useState(false)
    const map = useTypeSelector(state => state.map.mapRef)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const handleAddToFavorite = async (favoirteItem: IFavoriteItem) => {
        setIsAdd(true)
        if (id != null) {
            if (!isFavorite) {
                AddFavoriteCard(favoirteItem, id).then(() => {
                    setIsAdd(false)
                    setIsFavorite(true)
                    dispatch(addFavoriteItem(favoirteItem))
                })
            } else if (isFavorite) {
                DeleteFavoriteCard(favoirteItem.id, id).then(() => {
                    setIsFavorite(false)
                    setIsAdd(false)
                    dispatch(addFavoriteItem(favoirteItem))
                })
            }
        }
    }
    const handleClickMakeRoute = async () => {
        try {
            dispatch(clearDirection())
            const placeLocation = {
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0
            }

            const directionRequest = {
                origin: center,
                destination: placeLocation,
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
            dispatch(setTravelPlaceGeometry(placeLocation))
            dispatch(setTravelTime(time))
            dispatch(setDirectionRenderer(directionsRenderer))

        } catch (e) {
            console.log(e);
        }
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
                    <ButtonSave handleFunction={() => handleAddToFavorite(convertPlaceToFavorite(place))} isLoading={isAdd} isFavorite={isFavorite} />
                    <ButtonTravel handleFunction={() => {
                        if (place.geometry?.location != null && map != null) {
                            handleClickMakeRoute()
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