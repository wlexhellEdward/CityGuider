import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Aside from 'components/Aside'
import Map from 'components/Map'
import HomePageStyle from './styled'

export const HomePage = () => {
    const useHomePageStyle = HomePageStyle();
    const onLoad = () => {
        const redirectTo = useNavigate()
        redirectTo('/register')
    }
    return (
        <Box onLoad={onLoad} className={useHomePageStyle.classes.containerApp}>
            <Aside />
            <Map />
        </Box>
    )
}