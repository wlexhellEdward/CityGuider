import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';


const CurrentLocationMarkerStyle = makeStyles()((theme) => {
    return {
        markerContainer: {
            backgroundColor: themeApp.Pallete.blueColor,
            width: 120,
            height: 40,
            borderRadius: 64,
            zIndex: 12
        }

    };
});

export default CurrentLocationMarkerStyle