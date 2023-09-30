import { Marker } from "@react-google-maps/api"
import CurrentLocationMarkerStyle from "./CurrentLocationMarkerStyle"
import { Box } from '@mui/material'
import im from '../../assets/img/Im.svg'

interface CurrentLocationMarkerProps {
    position: {
        lat: number,
        lng: number
    }
}



export const CurrentLocationMarker = ({ position }: CurrentLocationMarkerProps) => {
    const useCurrentLocationMarkerStyle = CurrentLocationMarkerStyle()
    return (
        <>
            <Box className={useCurrentLocationMarkerStyle.classes.markerContainer}>
                <Marker icon={im} position={position}  />
            </Box>
        </>
    )
}