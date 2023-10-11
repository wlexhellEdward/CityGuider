import { makeStyles } from 'tss-react/mui';


const AppStyle = makeStyles()((theme) => {
    return {
        containerApp: {
            display: 'flex',
            width: '100vw',
            height: '100vh'
        },
    };
});

export default AppStyle