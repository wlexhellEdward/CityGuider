import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const paginationBarStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        
        pagination: {
            font: 'mont',
            margin: theme.spacing(2, 0, 5, 0),
        }

    })
)

export default paginationBarStyle