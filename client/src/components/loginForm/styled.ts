import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';

const LoginFormStyle = makeStyles<ThemeApp>()(
    (theme) => ({
        containerRegister: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&>*': {
                fontFamily: 'mont'
            }
        },
        buttonForgetPassword:{
            font:'mont',
            fontSize:theme.spacing(1.5),
        },
        titleForm: {
            margin: theme.spacing(2, 4),
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.6),
            }
        },
        inputRegister: {
            '&>*': {
                fontFamily: 'mont'
            }
        },
        containerInputsForm:{
            display:'flex',
            flexDirection:'column',
            alignItems:'end',
            '&>*':{
                marginBottom:theme.spacing(0.5)
            }
        },
        containerInputsLine:{
            display:'flex',
            gap:theme.spacing(2)
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
    }
))


export default LoginFormStyle