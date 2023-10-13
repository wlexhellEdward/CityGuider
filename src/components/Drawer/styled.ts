// import { styled } from '@mui/system';

import { makeStyles } from 'tss-react/mui';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const greyColor = '#7D908C'
const blueColor = '#5E7BC7'


export const DrawerStyle = makeStyles()((theme) => {
    const borderRadius = theme.spacing(1)
    return {
        apply: {
            marginRight: theme.spacing(2),
        },
        drawer: {
            position: "relative",
            transition: 'all .3s ease-in-out'
        },
        containerSearch: {
            borderRadius:borderRadius,
            border:`1px solid ${greyColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        titleFavorite: {
            color: 'black',
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 20,
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
    maxWidth:'350px',
    boxShadow:"8px 0px 5px -6px rgba(200, 200, 200, 0.6)",
    zIndex:10,
    backgroundColor:'white',
    height: '100vh',
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
