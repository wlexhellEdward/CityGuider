import { Typography, Button, Container, Box, } from "@mui/material"
import RouteInfoStyle from "./style"
import LinearProgress from '@mui/material/LinearProgress';


const distanceToTime = (distance: string) => {
    return parseFloat(distance) / 5 + " ч."
}

interface RouteInfoProops {
    distance: string,
    handlerSetTravelKilometrs: (kilometrs: string) => void
}


export const RouteInfo = ({ distance, handlerSetTravelKilometrs }: RouteInfoProops) => {

    const useRouteInfoStyle = RouteInfoStyle()
    return (
        <Container className={useRouteInfoStyle.classes.routeContainer}>
            <Box>
                <LinearProgress value={90} />
                <Button onClick={() => handlerSetTravelKilometrs("")}>X</Button>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{distance}</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{distanceToTime(distance)}</Typography>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>дистацния</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>примерное время</Typography>
            </Box>
        </Container>
    )
}