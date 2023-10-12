// import { styled } from '@mui/system';

import { makeStyles } from 'tss-react/mui';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const greyColor = '#7D908C'
const blueColor = '#5E7BC7'


export const DrawerStyle = makeStyles()((theme) => {
    return {
        apply: {
            marginRight: theme.spacing(2),
        },
        drawer: {
            position: "relative",
            transition: 'all .3s ease-in-out'
        },
        containerSearch: {
            margin: '20px 0px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        listItem: {
            display: "block",
        },
        selectItems: {
            width: "100%"
        },
        drawerContent: {
            display: 'flex',
            flexDirection: 'column',

        },
        containerCardsFavorites: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        },
        cardsFavorites: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            minHeight: '85vh',
            maxHeight: '85vh',

        },
        titleFavorite: {
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 20,
        },
        containerPlaces: {
            border: `1px solid ${greyColor}`,
            maxHeight: 350,
            paddingTop: 8,
            width: 'auto',
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
            fontWeight: 700,
            marginTop: 30,
            marginBottom: 10
        },
        platePlaces: {
            margin: '0px 2px'
        },
        spanDescription: {
            fontSize: 10,
            fontWeight: 700,
        },
        containerInputs: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
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
        buttonSearch: {
            marginTop: 20,
            cursor: 'pointer',
            backgroundColor: `${blueColor}`,
            width: 350,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        }
    };
});

const openedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowY: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '0',
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(7),
    },
});
export const DrawerContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    padding: theme.spacing(2.5),
    overflowY: 'auto',
    maxHeight: '100vh',
    '&::-webkit-scrollbar': {
        width: theme.spacing(.5)
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: ' transparent'
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(.4),
        backgroundColor: theme.palette.common.black,
    }
}))
export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

// export default DrawerStyle