import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const CardUserStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
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
    })
)

export default CardUserStyle