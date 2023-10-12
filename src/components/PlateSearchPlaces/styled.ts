import { makeStyles } from 'tss-react/mui';

const greyColor = '#EEEEEE'

const PlateSearchPlacesStyle = makeStyles()((theme) => {
    return {
        platePlaces: {
            margin: '0px 2px'
        },
        containerPlaces: {
            border: `1px solid ${greyColor}`,
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
                backgroundColor: `${greyColor}`
            },
            overflowY: 'scroll',
        },
        titleRadius: {
            fontSize: 18,
            color: 'black',
            fontWeight: 700,
            margin: '10px 0px'
        },
        containerInputs: {
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            gap: 10
        },
        titleFavorite: {
            color: 'black',
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 20,
        },
        spanDescription: {
            fontSize: 10,
            fontWeight: 700,
        },

        inputSearch: {
            display: 'flex',
            padding: 8,
            borderRadius: 8,
            width: 60,
            height: 30,
            border: `1px solid ${greyColor}`,
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