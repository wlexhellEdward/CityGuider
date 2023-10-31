import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const adminContentStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        title: {
            display: 'flex',
            font: 'mont',
            justifyContent: 'center',
        },
        content: {
            margin: theme.spacing(12, 0, 10, 2),
            font: 'mont',
            color: 'black',
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
        cardUser: {
            color: Pallete.title,
            maxHeight: theme.spacing(35)
        },
        cardMedia: {
            height: theme.spacing(5),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&>*': {
                width: theme.spacing(5),
                height: theme.spacing(5)
            }
        },
        titleCarduser: {
            color: Pallete.title,
            font: 'mont'
        },
        cardContentLine: {
            display: 'flex',
            justifyContent: 'space-between',
            columnGap: theme.spacing(5),
            padding: 0,
        },
        cardContent: {
            padding: theme.spacing(0.5, 2, 0, 2),
            '&>*': {
                padding: theme.spacing(0),
                fontSize: theme.spacing(1.4),
            }
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: theme.spacing(-2.8),
        },
        pagination: {
            font: 'mont',
            margin: theme.spacing(2, 0, 5, 0),
        }

    })
)

export default adminContentStyle