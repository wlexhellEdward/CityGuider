import { AppBar, Toolbar, Typography } from '@mui/material';
import BarStyle from './styled';
import { useTypeSelector } from 'hooks/redux';



export const Bar = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useBarStyle = BarStyle({ Pallete: pallete })
    return (
        <AppBar className={useBarStyle.classes.barBox}>
            <Toolbar>
                <Typography>
                    Админ панель City Guider
                </Typography>
            </Toolbar>
        </AppBar>
    )

}