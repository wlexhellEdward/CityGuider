import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const LoaderStyle = makeStyles<ThemeApp>()(
    () => ({
        loaderContainer: {
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
        }
    })
);

export default LoaderStyle