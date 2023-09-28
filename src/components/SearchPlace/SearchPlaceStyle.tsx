import { makeStyles } from "tss-react/mui";

const greyColor = '#7D908C'
const lightGreyColor = '#EEEEEE'
const blueColor = '#5E7BC7'

const SearchPlaceStyle = makeStyles()((theme) => {
    return {
        containerPlace: {
            display: 'flex',
            justifyContent: 'start',
            marginBottom: 10,
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
            fontSize: 14
        }

    }

})

export default SearchPlaceStyle