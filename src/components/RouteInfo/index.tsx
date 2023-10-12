import { useEffect } from 'react'
import { Box, Button, Container, Typography, } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';

import RouteInfoStyle from "./style"
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { clearDirection, deleteTravel, setDirectionRenderer, setTravelDistanceTraveled, setTravelTime } from 'store/reducers';
import { getDirections } from 'utils/route';

export const RouteInfo = () => {
    const dispatch = useAppDispatch()
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


    const useRouteInfoStyle = RouteInfoStyle()

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
        <Container className={useRouteInfoStyle.classes.routeContainer}>
            <Box>
                <LinearProgress className={useRouteInfoStyle.classes.progressBar} variant='determinate' value={progressTravel} />
                <Button className={useRouteInfoStyle.classes.buttonClose} onClick={() => handleClickDeleteTravel()}>X</Button>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{distanceRemaining} км</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{time}</Typography>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>дистацния</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>примерное время</Typography>
            </Box>
        </Container>
    )
}