import { makeStyles } from 'tss-react/mui';

const greyColor = '#7D908C'

const AutocompleteStyle = makeStyles()((theme) => {
    const space = theme.spacing(2.5);
    return {
        containerInput: {
            border: `1px solid ${greyColor}`,
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:60,
        },
        searchImg:{
            opacity:0.3
        },
        searchInput: {
            paddingLeft:space,
            paddingTop:4,
            fontSize:18,
            display:'flex',
            width: '100%',
            '&:before': {
                content: 'none',
            },
            '&:after': {
                content: 'none'
            }
        },
        suggestions:{
            backgroundColor:'red',
            width:350,
            height:200,
            zIndex:9999
        }
    };
});

export default AutocompleteStyle