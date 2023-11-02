import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useTypeSelector } from '@/hooks/redux';
import { Link } from 'react-router-dom';

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