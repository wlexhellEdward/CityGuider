import { ThemeApp } from 'interfaces/IThemeApp';
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
        titleForm: {
            margin: theme.spacing(2, 4),
        },
        inputRegister: {
            '&>*': {
                fontFamily: 'mont'
            }
        },
        containerInputsForm: {
            gap:theme.spacing(0.5),
            display: 'flex',
            flexDirection: 'column',
            '&>*': {
                marginBottom: theme.spacing(2)
            }
        },
        containerInputsLine: {
            display: 'flex',
            gap: theme.spacing(2),
            [theme.breakpoints.down('sm')]:{
                flexDirection:'column'
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