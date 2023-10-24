import { Box } from '@mui/material'
import Aside from 'components/Aside'
import Map from 'components/Map'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import HomePageStyle from './styled'

export const HomePage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/register');
        }
    }, [isAuth, navigate]);

    const useHomePageStyle = HomePageStyle();

    return (
        <Box className={useHomePageStyle.classes.containerApp}>
            <Aside />
            <Map />
        </Box>
    );

}