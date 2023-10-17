import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';




const ButtonSaveStyle = makeStyles()((theme) => {
    return {
        btnSaved: {
            border: `1px solid ${themeApp.Pallete.greyColor}`,
            borderRadius: '8px',
            width: 120,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: theme.spacing(2),
            marginLeft: '0',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f5f5f5',
                borderColor: themeApp.Pallete.greyColor
            },
            '& > *': {
                color: themeApp.Pallete.black,
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
                display:'none'
            }
        },
    };
});


export default ButtonSaveStyle