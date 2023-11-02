import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';


const adminContentStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        loader: {
            zIndex: 10,
            position: 'relative',
            left: theme.spacing(92),
            width: '100vw',
            height: '100vh',
        },
        title: {
            display: 'flex',
            font: 'mont',
            color: Pallete.title,
            justifyContent: 'center',
        },
        content: {
            padding:theme.spacing(10,0),
            font: 'mont',
            color: 'black',
            width: '100vw',
            height: '100vh',
            backgroundColor:Pallete.background
        },
        userContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
        cardsUsers: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: theme.spacing(2),
            marginLeft: theme.spacing(8),
            minHeight: theme.spacing(70)
        },
        pagination: {
            font: 'mont',
            margin: theme.spacing(2, 0, 5, 0),
        }

    })
)

export default adminContentStyle