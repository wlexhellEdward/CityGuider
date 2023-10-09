import { makeStyles } from 'tss-react/mui';

const greyColor = '#EEEEEE'

const AutocompleteStyle = makeStyles()((theme) => {
    const space = theme.spacing(2.5);
    return {
        containerInput: {
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "60",
        },
        Autocomplete: {
            display: 'flex',
            border: `1px solid ${greyColor}`,
            flexDirection: 'column',
        },
        ListContainer: {
            display: 'flex',
            padding: '10px 8px',
            maxWidth: '100%',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderTop: `1px solid ${greyColor}`
        },
        suggestionContainer:{
            display:'flex',
            flexDirection:'column',
            alignItems:'start'
        },
        titleSuggestion:{
            fontWeight:'bold',
            fontSize:12
        },
        titleDescription:{
            fontSize:10,
            color:'#A9A9A9',
        },
        listItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
            transition: '.3s linear',
            '&>li': {
                margin: '5px 0px',
                cursor: 'pointer',
                width: '100%',
            },
            '&>li:hover': {
                backgroundColor: greyColor,
            }
        },
        searchImg: {
            opacity: 0.3
        },
        searchInput: {
            paddingLeft: space,
            paddingTop: 4,
            fontSize: 18,
            display: 'flex',
            height: 40,
            width: '100%',
            '&:before': {
                content: 'none',
            },
            '&:after': {
                content: 'none'
            }
        },
        suggestions: {
            backgroundColor: 'red',
            width: 350,
            height: 200,
            zIndex: 9999
        }
    };
});

export default AutocompleteStyle