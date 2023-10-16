import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';




const ButtonSearchStyle = makeStyles()((theme) => {
    return {
       buttonSearch: {
            marginTop: 20,
            cursor: 'pointer',
            backgroundColor: `${themeApp.Pallete.blueColor}`,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        }
    };
});

export default ButtonSearchStyle