import { darken } from '@mui/system';
import { ThemeApp } from 'models/IThemeApp';
import { makeStyles } from 'tss-react/mui';

const ButtonSaveStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        btnSaved: {
            border: `1px solid ${Pallete.description}`,
            borderRadius: '8px',
            width: 120,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '0',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: darken(Pallete.border,0.1),
                borderColor: Pallete.description
            },
            '& > *': {
                color: Pallete.title,
            },
            [theme.breakpoints.down('sm')]: {
                gap: theme.spacing(0.5),
            },
        },
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {

                width: '16px',
                height: '16px',
                [theme.breakpoints.down('sm')]: {
                    width: theme.spacing(1.5),
                    height: theme.spacing(1.5)
                }
            },
        },
        buttonSearchTitle: {
            fontFamily: 'mont',
            [theme.breakpoints.down('sm')]: {
                fontSize: 12,
                display: 'none'
            }
        },
    })
);


export default ButtonSaveStyle