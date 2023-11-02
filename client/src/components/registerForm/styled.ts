import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';

const RegisterFormStyle = makeStyles<ThemeApp>()(
    (theme) => ({
        containerRegister: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&>*': {
                fontFamily: 'mont'
            }
        },
        formRegister:{
            width:theme.spacing(60),
            [theme.breakpoints.down('sm')]: {
                width:theme.spacing(30),
            }
        },
        avatar:{
            [theme.breakpoints.down('sm')]: {
                display:'none'
            }
        },
        titleForm: {
            margin: theme.spacing(2, 4),
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2),
            }
        },
        inputRegister: {
            '&>*': {
                fontFamily: 'mont'
            }
        },
        containerInputsForm: {
            gap: theme.spacing(0.5),
            display: 'flex',
            flexDirection: 'column',
            '&>*': {
                marginBottom: theme.spacing(2),
                width:'100%',
            },
            [theme.breakpoints.down('sm')]: {
                gap: theme.spacing(0.3),
            }
        },
        containerInputsLine: {
            display: 'flex',
            flexDirection:'column',
            gap: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
        },
        buttonSubmit: {
            margin: theme.spacing(2, 0),
            fontFamily: 'mont'
        },
        featActionForm: {
            display: 'flex',
            justifyContent: 'end',
            '&>*': {
                '&>*': {
                    fontFamily: 'mont'
                }
            }
        },
        supportActionTitle: {
            fontFamily: 'mont'
        }
    })
);


export default RegisterFormStyle