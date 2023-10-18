import { Box } from '@mui/material'
import { Marker } from "@react-google-maps/api"
import im from 'assets/img/MarkerHuman/Im.svg'

import { CurrentLocationMarkerProps } from './interfaces'
import CurrentLocationMarkerStyle from "./styled"

export const CurrentLocationMarker = ({ position }: CurrentLocationMarkerProps) => {
    const useCurrentLocationMarkerStyle = CurrentLocationMarkerStyle()
    return (
        <>
            <Box className={useCurrentLocationMarkerStyle.classes.markerContainer}>
                <Marker icon={im} title='marker icon' position={position}  />
            </Box>
        </>
    )
}