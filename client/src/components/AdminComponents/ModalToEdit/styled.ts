import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';


export const modalToEditStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        dialogTitle: {
            backgroundColor:Pallete.background,
            color:Pallete.title
        },
        dialogContent: {
            display: 'flex',
            backgroundColor: Pallete.background,
            width: theme.spacing(50),
            gap: theme.spacing(2),
            flexDirection: 'column',
        },
        dialogActions:{
            backgroundColor:Pallete.background,
        },
        inputs: {
            '&>*': {
                font: 'mont',
                color: Pallete.title
            },
        }

    })
)
