import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';

const ResetPasswordModalStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        modal: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:{
            display:'flex',
            justifyContent: 'center',
            width:'100%',
            fontSize:theme.spacing(2),
            font:'mont',
            marginBottom:theme.spacing(2)
        },
        formReset: {
            backgroundColor: Pallete.background,
            padding: theme.spacing(2, 5)
        },
        formAction: {
            display:'flex',
            marginTop:theme.spacing(2),
            columnGap:theme.spacing(2)
        }
    })
)


export default ResetPasswordModalStyle