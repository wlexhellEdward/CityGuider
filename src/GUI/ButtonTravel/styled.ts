import { makeStyles } from 'tss-react/mui';




const ButtonTravelStyle = makeStyles()((theme) => {
    return {
        buttonTravel: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 30,
            color: 'white',
            backgroundColor: '#5E7BC7',
            borderRadius: theme.spacing(1),
            gap: 10,
            '&:hover': {
                backgroundColor: '#6495ed'
            }
        },
        iconTravel: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 16,
            height: 16,
            '& > *': {
                width: '16px',
                height: '16px'
            },
        }
    };
});


export default ButtonTravelStyle