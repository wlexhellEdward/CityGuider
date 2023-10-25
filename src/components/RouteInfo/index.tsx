import { Box, Button, Container, Typography, } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { useEffect } from 'react'
import { clearDirection, deleteTravel, setDirectionRenderer, setTravelDistanceTraveled, setTravelTime } from 'store/reducers';
import { getDirections } from 'utils/route';

import RouteInfoStyle from "./styled"

export const RouteInfo = () => {
    const dispatch = useAppDispatch()
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const map = useTypeSelector(state => state.map.mapRef)
    const { distance, distanceTraveled, placeGeometry, time } = useTypeSelector(state => state.map.travelInfo)
    const directionsRenderer = useTypeSelector(state => state.map.directionsRenderer)
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const progressTravel = distanceTraveled / distance * 100
    const distanceRemaining = ((distance - distanceTraveled) / 1000).toFixed(0)
    const handleClickDeleteTravel = () => {
        dispatch(deleteTravel())
        dispatch(clearDirection())
    }


    const useRouteInfoStyle = RouteInfoStyle({Pallete:pallete})

    useEffect(() => {
        const fetchDirections = async () => {
            const directionRequest = {
                origin: center,
                destination: placeGeometry,
                travelMode: google.maps.TravelMode.WALKING
            }
            const result = await getDirections(directionRequest)

            const distanceTraveled = distance - (result?.routes[0].legs[0].distance?.value || 0)
            const time = result?.routes[0].legs[0].duration?.text || ''

            dispatch(setTravelDistanceTraveled(distanceTraveled))
            dispatch(setTravelTime(time))
            dispatch(setDirectionRenderer(directionsRenderer))
        }

        placeGeometry && map && fetchDirections()
    }, [center])

    return (
        <Container data-testid='route-info' className={useRouteInfoStyle.classes.routeContainer}>
            <Box>
                <LinearProgress className={useRouteInfoStyle.classes.progressBar} variant='determinate' value={progressTravel} />
                <Button data-testid='route-button-close'  className={useRouteInfoStyle.classes.buttonClose} onClick={() => handleClickDeleteTravel()}>X</Button>
            </Box>
            <Box>
                <Typography  className={useRouteInfoStyle.classes.routeValue}>{distanceRemaining} км</Typography>
                <Typography data-testid='route-remaing-time' className={useRouteInfoStyle.classes.routeValue}>{time}</Typography>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>дистацния</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>примерное время</Typography>
            </Box>
        </Container>
    )
}