import { Marker } from "@react-google-maps/api"

import { Box } from '@mui/material'

import im from '@/assets/img/MarkerHuman/Im.svg'
import { useTypeSelector } from '@/hooks/redux'

import CurrentLocationMarkerStyle from "./styled"

export const CurrentLocationMarker = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useCurrentLocationMarkerStyle = CurrentLocationMarkerStyle({Pallete:pallete})
    const position = useTypeSelector(state => state.currentPosition.humanPosition)
    return (
        <Box className={useCurrentLocationMarkerStyle.classes.markerContainer}>
            <Marker icon={im} title='marker icon' position={position} />
        </Box>
    )
}