import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';

const ModalFormErrorStyle = makeStyles()((theme) => {
    return {
        wrapperModal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: themeApp.Pallete.white,
            border: '2px solid #000',
            padding: theme.spacing(2, 5),
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center'
        },
        titleError: {
            fontFamily: 'mont',
            fontSize: theme.spacing(4),
            marginBottom: theme.spacing(2)
        },
        errorIcon:{
            fill:'red',
            width:theme.spacing(10),
            height:theme.spacing(10)
        },
        descriptionError: {
            display: 'flex',
            fontFamily: 'mont',
            justifyContent: 'center',
            fontSize: theme.spacing(1.5),
            marginBottom: theme.spacing(2),
            color: themeApp.Pallete.greyColor
        }
    };
});


export default ModalFormErrorStyle