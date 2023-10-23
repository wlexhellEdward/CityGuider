import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';


const PageStyle = makeStyles()((theme) => {
    return {
        containerApp: {
            display: 'flex',
            width: '100vw',
            height: '100vh',
        },
        containerText: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

        },
        title: {
            fontFamily: 'mont',
            fontSize: theme.spacing(5),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(2)
            }
        },
        description: {
            fontFamily: 'mont',
            color: themeApp.Pallete.greyColor,
            fontSize: theme.spacing(1.5),
            marginBottom: theme.spacing(3)
        },
        containerPageForm: {
            minWidth: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }

    };
});

export default PageStyle