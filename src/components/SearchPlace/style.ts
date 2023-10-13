import { makeStyles } from "tss-react/mui";

const greyColor = '#7D908C'
const lightGreyColor = '#EEEEEE'
const blueColor = '#5E7BC7'

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
                backgroundColor: `${lightGreyColor}`
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
            color:greyColor,
        },
        imgSelectedPlace:{
            width: 30,
            height: 30,
            opacity:.6
        }

    }

})

export default SearchPlaceStyle