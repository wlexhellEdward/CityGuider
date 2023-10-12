import { Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material'
import ButtonSave from 'GUI/ButtonSave';
import ButtonTravel from 'GUI/ButtonTravel';
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { IFavoriteItem } from 'models/IFavoriteItem'
import { addFavoriteItem, clearDirection, setDirectionRenderer, setTravelDistance, setTravelDistanceTraveled, setTravelPlaceGeometry, setTravelTime } from 'store/reducers'
import { convertPlaceToFavorite } from 'utils/convert'
import { getDirections } from 'utils/route';

import DoesntExistPhoto from '../../../public/doesntExist.jpg'


import CardPlaceStyle from './styled'
import { CardPlaceProps } from './interfaceProps';
import PopUp from 'components/Pop-up';


const checkValidPhoto = (place: google.maps.places.PlaceResult) => {
    return place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : DoesntExistPhoto
}


export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispatch()
    const favoriteItems = useTypeSelector(state => state.favoriteItems.favoriteItems)
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const isFavorite = favoriteItems.some(item => item.title == place.name)
    const map = useTypeSelector(state => state.map.mapRef)

    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))
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
    const useCardPlaceStyle = CardPlaceStyle()

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
                    <ButtonSave handleFunction={() => handleAddToFavorite(convertPlaceToFavorite(place))} isFavorite={isFavorite} />
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