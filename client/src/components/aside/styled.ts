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
        
    }))



export default AsideStyle