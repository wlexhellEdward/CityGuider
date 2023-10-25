import { ThemeApp } from "models/IThemeApp";
import { makeStyles } from "tss-react/mui";


const CardPlaceStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        cardPlace: {
            backgroundColor:Pallete.background,
            width: theme.spacing(40),
            height: theme.spacing(43),
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(20),
                height: theme.spacing(35)
            }
        },
        placePhoto: {
            width: '100%',
            height: theme.spacing(28),
            [theme.breakpoints.down('sm')]: {
                height: theme.spacing(18),
            }
        },
        cardContent: {
            display: 'flex',
            backgroundColor:Pallete.background,
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                padding: 5,
                marginTop: 5,
                marginBottom: 5,
            }
        },
        cardActions: {
            display: 'flex',
            backgroundColor:Pallete.background,
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                padding: 5,
                marginTop: 5,
                marginBottom: 5,
            }
        },
        title: {
            color: Pallete.title,
            fontSize: 16,
            fontFamily: 'mont',

        },
        placeAdress: {
            fontSize: 10,
            color: Pallete.description,
            fontFamily: 'mont',
        },
    })
)

export default CardPlaceStyle