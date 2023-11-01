import { useEffect } from 'react'
import { Box } from '@mui/material'
import Aside from 'components/aside'
import Map from 'components/map'
import { useTypeSelector } from 'hooks/redux'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router'

import HomePageStyle from './styled'


export const HomePage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    useEffect(() => {
        if (!isAuth) {
            navigate('/register');
        }
    }, [isAuth, navigate]);

    const useHomePageStyle = HomePageStyle({Pallete:pallete});

    return (
        <Box className={useHomePageStyle.classes.containerApp}>
            <Aside />
            <Map />
        </Box>
    );

}