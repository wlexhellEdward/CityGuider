import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';



const RouteInfoStyle = makeStyles()((theme) => {
    return {
        routeContainer: {
            position: 'absolute',
            width: 400,
            backgroundColor:'white',
            height: 115,
            zIndex: 9,
            right: 20,
            bottom: 20,
            borderRadius:8,
            padding:'4px 8px',
            border: '1px solid black',
            '&>div': {
                height: '30%',
                display: 'flex',
                alignItems:'center',
                justifyContent: 'space-between'
            },
            [theme.breakpoints.down('sm')]: {
                right: 5,
                bottom: 5,
                height:70,
                width: 250,
            },
        },
        progressBar:{
            width:300,
            backgroundColor:'#E8DF1',
            '& span':{
                backgroundColor:'#C75E5E'
            }
        },
        routeValue: {
            color:themeApp.Pallete.darkBlue,
            fontWeight: 'bold',
            fontSize: 'calc(16px + (24 - 16) * ((100vw - 375px) / (1920 - 375)))',
        },
        routeValueDescription: {
            color: themeApp.Pallete.darkBlue,
            opacity:.8,
            fontSize: '10px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
            },
        },
        buttonClose:{
            width:'20px',
            justifyContent:'end',
            '&:focus':{
                border:'none',
                outline:'none',
            }
        }
    };
});

export default RouteInfoStyle