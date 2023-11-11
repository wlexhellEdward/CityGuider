import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Box } from '@mui/material'

import Aside from '@/components/Aside'
import Map from '@/components/Map'
import { useTypeSelector } from '@/hooks/redux'
import { useAuth } from '@/hooks/useAuth'

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