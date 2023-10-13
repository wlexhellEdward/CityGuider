import { makeStyles } from 'tss-react/mui';




const ButtonTravelStyle = makeStyles()((theme) => {
    return {
        buttonTravel: {
            display: 'flex',
            alignItems: 'center',
            textAlign:'center',
            justifyContent: 'center',
            width: 120,
            height: 30,
            color: 'white',
            backgroundColor: '#5E7BC7',
            borderRadius: theme.spacing(1),
            gap: theme.spacing(2),
            '&:hover': {
                backgroundColor: '#6495ed'
            },
            [theme.breakpoints.down('sm')]: {
                gap: theme.spacing(0.5),
            }
        },
        buttonTravelTitle: {
            fontFamily:'mont',

            [theme.breakpoints.down('sm')]: {
                fontSize: 12,
            }
        },
        iconTravel: {
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
        }
    };
});


export default ButtonTravelStyle