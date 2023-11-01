import { darken } from "@mui/system/colorManipulator";

import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";


const AsideStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        container: {
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            width: 'auto',
            backgroundColor: Pallete.background,
        },
        asideContainer: {
            width: '100px',
            zIndex: 11,
            backgroundColor: Pallete.background,
            margin: 0,
            boxShadow: `8px 0px 5px -6px ${darken(Pallete.background,0.1)}`,
            height: '100vh',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            color: Pallete.black,
            [theme.breakpoints.down('sm')]: {
                width: '50px',
            }
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 20,
            marginTop: 10,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 5,
                '&>img': {
                    height: 25
                }
            },
        },
        listItems: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        listItemButton: {
            [theme.breakpoints.down('sm')]: {
                width: '40px',
                rowGap: theme.spacing(1),
                '&>div': {
                    width: '35px',
                }
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: Pallete.background,
            margin: 0,
            padding: 0,
            width: 100,
            gap: 20,
            '& > *': {
                cursor: 'pointer',
                transition: '.3s linear'
            },
        },
        itemButton: {
            cursor: 'pointer',
            marginBottom: 12,
            transition: '.3s linear',
            backgroundColor: Pallete.background,
        },
        profileOutter: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: theme.spacing(2),
            backgroundColor: Pallete.background,
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                '&>*': {
                    width: '32px'
                }
            }
        },
        containerButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Pallete.background,
            '&>*': {
                transition: 'all .3s linear'
            },
            '&>*:hover': {
                transform: 'scale(1.045)'
            },

        },
        drawerAction: {
            display: 'flex',
            marginTop: 10,

            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        buttonCloseDrawer: {
            backgroundColor: "transparent",
            transition: 'all .3s linear',
            fontSize: 14,
            color: Pallete.description,
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                borderColor: Pallete.border,
            },
        }
    }))



export default AsideStyle