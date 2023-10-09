import { makeStyles } from 'tss-react/mui';

// const greyColor = '#7D908C'
// const blueColor = '#5E7BC7'
const darkBlue = '#405F7B'


const RouteInfoStyle = makeStyles()((theme) => {
    return {
        routeContainer: {
            position: 'absolute',
            width: 400,
            backgroundColor:'white',
            height: 115,
            zIndex: 99,
            right: 20,
            bottom: 20,
            borderRadius:8,
            padding:'4px 8px',
            border: '1px solid black',
            '&>div': {
                height: '40%',
                display: 'flex',
                justifyContent: 'space-between'
            }
        },
        routeValue: {
            color:darkBlue,
            fontWeight: 'bold',
            fontSize: '24px',
        },
        routeValueDescription: {
            color: darkBlue,
            opacity:.8,
            fontSize: '10px'
        }
    };
});

export default RouteInfoStyle