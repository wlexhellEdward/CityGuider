import { makeStyles } from 'tss-react/mui';

const greyColor = '#7D908C'
const blueColor = '#5E7BC7'


const AppStyle = makeStyles()((theme) => {
    return {
        containerApp: {
            display: 'flex',
            width: '100vw',
            height: '100vh'
        },
        containerSideBar: {
            height: '100vh',
            width: 'auto',
            display: 'flex',
            position: 'absolute',
            left: theme.spacing(15),
            '&>*::-webkit-scrollbar': {
                width: 5
            },
            '&>*::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
            },
            '&>*::-webkit-scrollbar-thumb': {
                borderRadius: 4,
                backgroundColor: `${greyColor}`
            },
            overflowY: 'scroll',
        },
        boxArrow: {
            width: 20,
            position: 'absolute',
            zIndex: '10',
            left: theme.spacing(16),
            height: '100%',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
        },
        boxArrowOpen: {
            width: 20,
            position: 'absolute',
            zIndex: '10',
            left: theme.spacing(55),
            height: '100%',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
        },
        arrowShowMore: {
            rotate: '180deg',

        },
        containerArrow: {
            display: 'flex',
            alignItems: 'center',
            boxShadow: '8px 0px 6px 2px rgba(200, 200, 200, 0.6)',
            width: 20,
            height: 40,
            backgroundColor: 'white',
            borderRadius: '0 8px 8px 0',
        }
    };
});

export default AppStyle