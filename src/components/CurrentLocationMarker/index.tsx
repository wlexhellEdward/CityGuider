import { Box } from '@mui/material'
import { Marker } from "@react-google-maps/api"
import im from 'assets/img/MarkerHuman/Im.svg'

import CurrentLocationMarkerStyle from "./styled"
import { useTypeSelector } from 'hooks/redux'

export const CurrentLocationMarker = () => {
    const useCurrentLocationMarkerStyle = CurrentLocationMarkerStyle()
    const position = useTypeSelector(state => state.currentPosition.humanPosition)
    return (
        <Box className={useCurrentLocationMarkerStyle.classes.markerContainer}>
            <Marker icon={im} title='marker icon' position={position} />
        </Box>
    )
}