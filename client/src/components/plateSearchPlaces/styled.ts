import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';

const PlateSearchPlacesStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        platePlaces: {
            margin: '0px 2px'
        },
        containerPlaces: {
            border: `1px solid ${Pallete.border}`,
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
                backgroundColor: `${Pallete.border}`
            },
            overflowY: 'scroll',
        },
        titleRadius: {
            fontSize: 18,
            color: Pallete.title,
            fontFamily: 'mont',
            fontWeight: 700,
            margin: '10px 0px'
        },
        containerInputs: {
            display: 'flex',
            alignItems: 'center',
            color: Pallete.black,
            gap: 10
        },
        titleFavorite: {
            color: Pallete.title,
            fontWeight: 700,
            fontSize: 18,
            fontFamily: 'mont',
            marginBottom: 20,
        },
        spanDescription: {
            fontSize: 10,
            color:Pallete.description,
            fontWeight: 700,
            fontFamily: 'mont',
        },
        inputSearch: {
            display: 'flex',
            padding: 8,
            borderRadius: 8,
            width: 60,
            color:Pallete.title,
            height: 30,
            border: `1px solid ${Pallete.border}`,
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
        SearchActionsBox:{
            marginBottom:theme.spacing(4)
        }
    })
);

export default PlateSearchPlacesStyle