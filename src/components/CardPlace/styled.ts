import { makeStyles } from "tss-react/mui";


const CardPlaceStyle = makeStyles()((theme) => {
    return{
        cardPlace:{
            minWidth:'200px',
            minHeight:'250px',
        },
        placePhoto:{
            minWidth:'400px',
            maxHeight:'350px'
        },
        cardContent:{
            display:'flex',
            flexDirection:'column'
            
        },
        cardActions:{
            display:'flex',
            justifyContent:'space-between'
        },
        title:{
            color:'black',
            fontSize:16,
        },
        placeAdress:{
            fontSize:10,
            color:'grey'
        }
    }
})

export default CardPlaceStyle