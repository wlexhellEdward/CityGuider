import { ThemeApp } from "models/IThemeApp";
import { makeStyles } from "tss-react/mui";


const SearchPlaceStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        containerPlace: {
            display: 'flex',
            justifyContent: 'start',
            marginBottom: theme.spacing(2),
            gap: 20,
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: Pallete.border
            }
        },
        imgPlace: {
            width: 30,
            height: 30,
        },
        titlePlace: {
            fontSize: 14,
            fontFamily: 'mont',
            color: Pallete.title,
            [theme.breakpoints.down('sm')]: {
                fontSize: 12
            }
        },
        titleSelectedPlace: {
            fontSize: 14,
            fontFamily: 'mont',
            color: Pallete.description,
            [theme.breakpoints.down('sm')]: {
                fontSize: 12
            }
        },
        imgSelectedPlace: {
            width: 30,
            height: 30,
            opacity: .6
        }

    })
)

export default SearchPlaceStyle