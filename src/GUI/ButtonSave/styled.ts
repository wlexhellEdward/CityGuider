import { makeStyles } from 'tss-react/mui';


const greyColor = '#7D908C'
const greyLight = '808080'


const ButtonSaveStyle = makeStyles()((theme) => {
    return {
        btnSaved: {
            border: `1px solid ${greyColor}`,
            borderRadius: '8px',
            width: 120,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: greyColor,
            gap: 15,
            marginLeft: '0',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f5f5f5',
                borderColor: greyColor
            },
            '& > *': {
                color: greyLight,
            },
        },
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
        },
    };
});


export default ButtonSaveStyle