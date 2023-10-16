import { makeStyles } from 'tss-react/mui';


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