import { makeStyles } from 'tss-react/mui';



const ArrowBoxStyle = makeStyles()((theme) => {
    return {
        boxArrow: {
            width: theme.spacing(3),
            position: 'absolute',
            zIndex: '10',
            left: theme.spacing(12),
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
        containerArrow: {
            display: 'flex',
            alignItems: 'center',
            boxShadow: '8px 0px 6px 2px rgba(200, 200, 200, 0.6)',
            width: 20,
            height: 40,
            backgroundColor: 'white',
            borderRadius: '0 8px 8px 0',
        },
        arrowShowMore: {
            rotate: '180deg',
        }
    };
});

export default ArrowBoxStyle