import { makeStyles } from "tss-react/mui";


const CardPlaceStyle = makeStyles()((theme) => {
    return {
        cardPlace: {
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
        placePhoto: {
            width: '100%',
            height: theme.spacing(28)
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column'
        },
        
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        title: {
            color: 'black',
            fontSize: 16,
        },
        placeAdress: {
            fontSize: 10,
            color: 'grey'
        },
        '@media (max-width: 768px)': {
            placePhoto: {
                backgroundColor: 'lightblue',
            },
        },
    }
})

export default CardPlaceStyle