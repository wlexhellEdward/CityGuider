import { makeStyles } from "tss-react/mui";
import { themeApp } from "utils/consts";


const SearchPlaceStyle = makeStyles()((theme) => {
    return {
        containerPlace: {
            display: 'flex',
            justifyContent: 'start',
            marginBottom: theme.spacing(2),
            gap: 20,
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: `${themeApp.Pallete.lightGreyColor}`
            }
        },
        imgPlace: {
            width: 30,
            height: 30,
        },
        titlePlace: {
            fontSize: 14,
            fontFamily:'mont',
            color:'black',
        },
        titleSelectedPlace: {
            fontSize: 14,
            fontFamily:'mont',
            color:themeApp.Pallete.greyColor,
        },
        imgSelectedPlace:{
            width: 30,
            height: 30,
            opacity:.6
        }

    }

})

export default SearchPlaceStyle