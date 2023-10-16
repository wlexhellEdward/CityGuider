import { makeStyles } from 'tss-react/mui';


const LoaderStyle = makeStyles()(() => {
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