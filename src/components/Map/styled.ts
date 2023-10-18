import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';



const MapStyle = makeStyles()((theme) => {
    return {
        containerMap: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,

        },
        switchThemeButton: {
            border: `2px solid ${themeApp.Pallete.lightGreyColor}`,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: theme.spacing(1),
            right: theme.spacing(1),
            '&>*': {
                height: theme.spacing(2),
                width: theme.spacing(2),

            },
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                borderColor: themeApp.Pallete.lightGreyColor,
                backgroundColor: themeApp.Pallete.lightGreyColor,
            },
            zIndex: 9,
            backgroundColor: themeApp.Pallete.white,
            color: 'white',
        },
        containerMapActions:{
            position: 'absolute',
            zIndex:9,
            display: 'flex',
            top: theme.spacing(1),
            right: theme.spacing(6),
            columnGap:theme.spacing(1)
        },
        findMeButton:{
            position:'relative',
            border: `2px solid ${themeApp.Pallete.lightGreyColor}`,
            backgroundColor: themeApp.Pallete.white,
            borderRadius: theme.spacing(1),
            '&>*': {
                height: theme.spacing(2),
                width: theme.spacing(2),
            },
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                borderColor: themeApp.Pallete.lightGreyColor,
                backgroundColor: themeApp.Pallete.lightGreyColor,
            },
        },
        containerMapActionsZoom: {
            position: 'relative',
            display: 'flex',
            rowGap: '5px',
            zIndex: 9,
            border: `2px solid ${themeApp.Pallete.lightGreyColor}`,
            backgroundColor: themeApp.Pallete.white,
            borderRadius: theme.spacing(1)
        },
        buttonZoom:{
            font: 'mont',
            color: themeApp.Pallete.greyColor,
            transition: '.3s linear all',
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                backgroundColor: themeApp.Pallete.lightGreyColor,
            },
        }
    };
});

export default MapStyle