import { ThemeApp } from '@/interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const BarStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        barBox: {
            display: 'flex',
            alignItems: 'center',
            color:Pallete.background,
            alignContent: 'center',
            textAlign: 'center',
            height: theme.spacing(5),
            '&>*': {
                marginTop: theme.spacing(-1.5)
            }
        }
    })
)

export default BarStyle