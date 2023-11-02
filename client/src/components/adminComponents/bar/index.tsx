import { Link } from 'react-router-dom';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { AppBar, Box,Toolbar, Typography } from '@mui/material';

import { useTypeSelector } from '@/hooks/redux';

import BarStyle from './styled';


export const Bar = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useBarStyle = BarStyle({ Pallete: pallete })
    return (
        <AppBar className={useBarStyle.classes.barBox}>
            <Toolbar className={useBarStyle.classes.toolBar}>
                <Box>
                    <Link className={useBarStyle.classes.buttonBackToMainPage} to='/'>
                        <ArrowCircleLeftIcon />
                    </Link>
                </Box>
                <Typography className={useBarStyle.classes.title}>
                    Админ панель City Guider
                </Typography>
                <Box></Box>
            </Toolbar>
        </AppBar>
    )

}