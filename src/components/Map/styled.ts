import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';



const MapStyle = makeStyles()((theme) => {
    return {
       containerMap:{
        position:'absolute',
        width:'100%',
        height:'100%',
        padding:0,
        margin:0,
        '&>*':{
            width:'32px',
            height:'32px',
        }
       },
       switchThemeButton:{
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:theme.spacing(1),
        border:'1px solid black',
        right:theme.spacing(1),
        '&>*':{
            height:theme.spacing(4),
            width:theme.spacing(2),
        },
        zIndex:13,
        backgroundColor:themeApp.Pallete.white,
        color:'white',
       }
    };
});

export default MapStyle