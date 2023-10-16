import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';



const PlateSearchPlacesStyle = makeStyles()((theme) => {
    return {
        platePlaces: {
            margin: '0px 2px'
        },
        containerPlaces: {
            border: `1px solid ${themeApp.Pallete.lightGreyColor}`,
            borderRadius: '8px',
            padding: '5px 15px',
            maxHeight: 350,
            paddingTop: 8,
            '&::-webkit-scrollbar': {
                width: 5
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: 4,
                backgroundColor: `${themeApp.Pallete.lightGreyColor}`
            },
            overflowY: 'scroll',
        },
        titleRadius: {
            fontSize: 18,
            color: themeApp.Pallete.black,
            fontFamily:'mont',
            fontWeight: 700,
            margin: '10px 0px'
        },
        containerInputs: {
            display: 'flex',
            alignItems: 'center',
            color: themeApp.Pallete.black,
            gap: 10
        },
        titleFavorite: {
            color: themeApp.Pallete.black,
            fontWeight: 700,
            fontSize: 18,
            fontFamily:'mont',
            marginBottom: 20,
        },
        spanDescription: {
            fontSize: 10,
            fontWeight: 700,
            fontFamily:'mont',
        },

        inputSearch: {
            display: 'flex',
            padding: 8,
            borderRadius: 8,
            width: 60,
            height: 30,
            border: `1px solid ${themeApp.Pallete.lightGreyColor}`,
            '&:before': {
                content: 'none',
            },
            '&:after': {
                content: 'none'
            }
        },
        buttonSearchContainer: {
            height: '100%',
            width: '100%'
        },
    };
});

export default PlateSearchPlacesStyle