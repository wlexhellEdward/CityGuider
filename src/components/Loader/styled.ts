import { makeStyles } from 'tss-react/mui';

const greyColor = '#7D908C'
const blueColor = '#5E7BC7'


const LoaderStyle = makeStyles()((theme) => {
    return {
        loaderContainer: {
            width: '100vw',
            height: '100vh',
            alignItems:'center',
            display: 'flex',
            justifyContent: 'center',
        }
    };
});

export default LoaderStyle