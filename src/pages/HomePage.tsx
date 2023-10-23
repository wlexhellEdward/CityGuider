import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Aside from 'components/Aside'
import Map from 'components/Map'
import HomePageStyle from './styled'
import { useAuth } from 'hooks/useAuth'

export const HomePage = () => {
    const useHomePageStyle = HomePageStyle();
    const { isAuth } = useAuth()
    const navigate = useNavigate()

    if (isAuth) {
        return (
            <Box className={useHomePageStyle.classes.containerApp}>
                <Aside />
                <Map />
            </Box>
        );
    } else {
        navigate('/register'); 
        return null;
    }
}