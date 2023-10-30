import { ThemeApp } from 'models/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const BarStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        barBox:{
            display:'flex',
            alignItems:'center'
        }
    })
)

export default BarStyle