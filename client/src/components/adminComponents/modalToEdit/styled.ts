import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


export const modalToEditStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        dialogContent: {
            display: 'flex',
            backgroundColor: Pallete.background,
            width: theme.spacing(50),
            gap: theme.spacing(2),
            flexDirection: 'column',
            '&>*': {
                font: 'mont',
            },
        }

    })
)
