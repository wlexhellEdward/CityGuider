import { makeStyles } from 'tss-react/mui';


const greyColor = '#7D908C'
const greyLight = '808080'


const ButtonSaveStyle = makeStyles()((theme) => {
    return {
        btnSaved: {
            border: `1px solid ${greyColor}`,
            borderRadius: '8px',
            width: 120,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: greyColor,
            gap: theme.spacing(2),
            marginLeft: '0',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f5f5f5',
                borderColor: greyColor
            },
            '& > *': {
                color: greyLight,
            },
            [theme.breakpoints.down('sm')]: {
                gap: theme.spacing(0.5),
            },
        },
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
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
            fontFamily:'mont',
            [theme.breakpoints.down('sm')]: {
                fontSize: 12,
            }
        },
    };
});


export default ButtonSaveStyle