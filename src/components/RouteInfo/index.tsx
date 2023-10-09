import { Box,Button, Container, Typography,  } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';

import RouteInfoStyle from "./style"
import { RouteInfoProops } from "./interfaceProps";


const distanceToTime = (distance: string) => {
    return parseFloat(distance) / 5 + " ч."
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