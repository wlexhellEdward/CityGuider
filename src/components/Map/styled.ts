import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';



const MapStyle = makeStyles()((theme) => {
    return {
        containerMap: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,

        },
        
    };
});

export default MapStyle