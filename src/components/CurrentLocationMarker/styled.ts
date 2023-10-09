import { makeStyles } from 'tss-react/mui';

const greyColor = '#7D908C'
const blueColor = '#5E7BC7'


const CurrentLocationMarkerStyle = makeStyles()((theme) => {
    return {
        markerContainer: {
            backgroundColor: blueColor,
            width: 120,
            height: 40,
            borderRadius: 64,
            zIndex: 12
        }

    };
});

export default CurrentLocationMarkerStyle