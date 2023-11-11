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
        buttonForgetPassword: {
            font: 'mont',
            fontSize: theme.spacing(1.5),
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
        containerInputsForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            '&>*': {
                marginBottom: theme.spacing(0.5)
            }
        },
        containerInputsLine: {
            display: 'flex',
            gap: theme.spacing(2)
        },
        buttonSubmit: {
            margin: theme.spacing(2, 0),
            fontFamily: 'mont'
        },
        btnWithIcons: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            '&>span': {
                marginLeft: theme.spacing(0),
                marginRight: theme.spacing(0),
            }
        },
        featActionForm: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&>*': {
                '&>*': {
                    fontFamily: 'mont'
                }
            }
        },
        supportActionTitle: {
            fontFamily: 'mont'
        },
        otherMethodSignIn: {
            color: 'blue',
            cursor: 'pointer',
            columnGap: theme.spacing(1),
            display: 'flex',
            justifyContent: 'space-between',
            '&>*': {
                margin: 0,
                '&>*': {
                    margin: 0,

                }
            }
        },
    }
    ))


export default LoginFormStyle