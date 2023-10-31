import { ThemeApp } from 'interfaces/IThemeApp';
import { makeStyles } from 'tss-react/mui';



const MapStyle = makeStyles<ThemeApp>()(
    () => ({
        containerMap: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,

        },
    })
);

export default MapStyle