import { useEffect } from 'react'
import { Box, Button, Container, Typography, } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';

import RouteInfoStyle from "./style"
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { deleteTravel, setTravelDistanceTraveled, setTravelProgress, setTravelTime } from 'store/reducers';
import { setTravelInfo } from 'utils/route';

export const RouteInfo = () => {
    const dispatch = useAppDispatch()
    const distance = useTypeSelector(state => state.map.travelInfo.distance)['kilometrs']
    const time = useTypeSelector(state => state.map.travelInfo.time)
    const map = useTypeSelector(state => state.map.mapRef)
    const center = useTypeSelector(state => state.currentPosition.humanPosition)
    const distanceTraveled = useTypeSelector(state => state.map.travelInfo.distanceTraveled)
    const placeGeometry = useTypeSelector(state => state.map.travelInfo.placeGeometry)
    const progressTravel = useTypeSelector(state => state.map.travelInfo.progress)

    const handleSetTavelDistanceTraveled = (kilometrs: string) => dispatch(setTravelDistanceTraveled(kilometrs))
    const handleDeleteTravel = () => dispatch(deleteTravel())
    const handleSetTraveProgress = (progress: number) => dispatch(setTravelProgress(progress))
    const handleSetTravelTime = (time: string) => dispatch(setTravelTime(time))

    const useRouteInfoStyle = RouteInfoStyle()

    useEffect(() => {
        if (placeGeometry && map) {
            setTravelInfo({
                start: center,
                distanceTraveled: distanceTraveled,
                end: placeGeometry,
                map: map,
                setTavelDistanceTraveled: handleSetTavelDistanceTraveled,
                setTravelProgress: handleSetTraveProgress,
                setTravelTime: handleSetTravelTime
            });
        }
    }, [center]);

    return (
        <Container className={useRouteInfoStyle.classes.routeContainer}>
            <Box>
                <LinearProgress className={useRouteInfoStyle.classes.progressBar} variant='determinate' value={progressTravel+30} />
                <Button className={useRouteInfoStyle.classes.buttonClose} onClick={handleDeleteTravel}>X</Button>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{distance}</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{time}</Typography>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>дистацния</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>примерное время</Typography>
            </Box>
        </Container>
    )
}