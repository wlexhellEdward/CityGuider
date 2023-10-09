import { makeStyles } from 'tss-react/mui';



const MapStyle = makeStyles()((theme) => {
    return {
       containerMap:{
        width:'100%',
        height:'100%',
        padding:0,
        margin:0,
        '&>*':{
            width:'32px',
            height:'32px',
        }
       }
    };
});

export default MapStyle