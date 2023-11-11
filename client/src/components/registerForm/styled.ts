import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';

const RegisterFormStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        containerRegister: {
            backgroundColor: Pallete.background,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&>*': {
                fontFamily: 'mont'
            }
        },
        formRegister: {
            width: theme.spacing(60),
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(30),
            }
        },
        avatar: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
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
                fontFamily: 'mont',
                '&>*': {
                    borderBottom: `3px solid ${Pallete.border}`,
                },
            }
        },
        
        containerInputsLine: {
            display: 'flex',
            flexDirection: 'column',
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
            justifyContent: 'space-between',
            alignItems: 'center',
            '&>*': {
                '&>*': {
                    fontFamily: 'mont'
                }
            },
            [theme.breakpoints.down('sm')]: {
                display:'flex',
                rowGap:theme.spacing(2),
                justifyContent:'center',
                flexDirection: 'column'
            }
        },
        otherMethodSignIn: {
            color: Pallete.main,
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

        passwordInput: {
            display: 'flex',
            alignItems: 'center',
            columnGap: theme.spacing(2),
            borderRadius: theme.spacing(1),
        },
        supportActionTitle: {
            fontFamily: 'mont'
        },
    })
);


export default RegisterFormStyle