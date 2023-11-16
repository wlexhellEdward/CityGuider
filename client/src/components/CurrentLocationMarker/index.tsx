import { Marker } from "@react-google-maps/api"

import { Box } from '@mui/material'

import im from '@/assets/img/markerHuman/Im.svg'
import { useTypeSelector } from '@/hooks/redux'

import { titles } from "./config"
import CurrentLocationMarkerStyle from "./styled"

export const CurrentLocationMarker = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useCurrentLocationMarkerStyle = CurrentLocationMarkerStyle({Pallete:pallete})
    const position = useTypeSelector(state => state.currentPosition.position)
    return (
        <Box className={useCurrentLocationMarkerStyle.classes.markerContainer}>
            <Marker icon={im} title={titles.markers} position={position} />
        </Box>
    )
}