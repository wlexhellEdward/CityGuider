import { makeStyles } from 'tss-react/mui';

const blueColor = '#5E7BC7'


const ButtonSearchStyle = makeStyles()((theme) => {
    return {
       buttonSearch: {
            marginTop: 20,
            cursor: 'pointer',
            backgroundColor: `${blueColor}`,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        }
    };
});

export default ButtonSearchStyle