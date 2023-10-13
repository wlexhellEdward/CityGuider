import { makeStyles } from "tss-react/mui";


const CardPlaceStyle = makeStyles()((theme) => {
    return {
        cardPlace: {
            width: theme.spacing(40),
            height: theme.spacing(43),
            [theme.breakpoints.down('sm')]:{
                width:theme.spacing(28),
                height:theme.spacing(32)
            }
        },
        placePhoto: {
            width: '100%',
            height: theme.spacing(28),
            [theme.breakpoints.down('sm')]:{
                height:theme.spacing(18),
            }
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]:{
                padding:5,
                marginTop:5,
                marginBottom:5,
            }
        },
        
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]:{
                padding:5,
                marginTop:5,
                marginBottom:5,
            }
        },
        title: {
            color: 'black',
            fontSize: 16,
            fontFamily:'mont',
            
        },
        placeAdress: {
            fontSize: 10,
            color: 'grey',
            fontFamily:'mont',

        },
    }
})

export default CardPlaceStyle