import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';




const MapActionStyle = makeStyles()((theme) => {
    return {
        wrapperMapActions: {
            position: 'absolute',
            backgroundColor: themeApp.Pallete.blueColor,
            padding: theme.spacing(0.5, 1),
            borderRadius: theme.spacing(1),
            zIndex: 9,
            display: 'flex',
            top: theme.spacing(1),
            right: theme.spacing(2),
            columnGap: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                right: theme.spacing(0.1),
                columnGap:theme.spacing(0.5),
            }
        },
        containerMapActions: {
            position: 'relative',
            display: 'flex',
            columnGap: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                columnGap:theme.spacing(0.5),
            }
        },
        switchThemeButton: {
            border: `2px solid ${themeApp.Pallete.lightGreyColor}`,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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

        findMeButton: {
            position: 'relative',
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
            borderRadius: theme.spacing(1),
        },
        buttonZoom: {
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
        },
        buttonToggleAction: {
            backgroundColor: themeApp.Pallete.white,
            borderRadius: theme.spacing(1),
            color: themeApp.Pallete.greyColor,
            minWidth: theme.spacing(1),
            minHeight: theme.spacing(4.4),
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            "&:hover": {
                backgroundColor: themeApp.Pallete.lightGreyColor
            },
        }
    };
});


export default MapActionStyle