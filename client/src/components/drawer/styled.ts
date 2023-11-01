import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme } from '@mui/material/styles';

import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';



export const DrawerStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        apply: {
            marginRight: theme.spacing(2),
        },
        drawer: {
            position: "relative",
            transition: 'all .3s ease-in-out',
        },
        containerSearch: {
            borderRadius: theme.spacing(1),
            border: `1px solid ${Pallete.description}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        titleFavorite: {
            color: Pallete.title,
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
            backgroundColor:Pallete.background,
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                maxHeight: '94vh'
            }
        },

    }))


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
    maxWidth: '350px',
    boxShadow: "8px 0px 5px -6px rgba(200, 200, 200, 0.6)",
    zIndex: 10,
    backgroundColor: 'white',
    height: '100vh',
    '&::-webkit-scrollbar': {
        width: 5
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: 4,
        backgroundColor: 'transparent',
        
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
