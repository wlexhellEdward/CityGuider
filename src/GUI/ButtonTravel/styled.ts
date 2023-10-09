import { makeStyles } from 'tss-react/mui';


const greyColor = '#7D908C'
const greyLight = '808080'


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
            borderRadius: 8,
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