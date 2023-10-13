import { makeStyles } from 'tss-react/mui';

const greyColor = '#EEEEEE'

const AutocompleteStyle = makeStyles()((theme) => {
    return {
        containerInput: {
            display: 'flex',
            width:'100%',
            alignItems: 'center',
            padding:'4px 8px',
            columnGap:theme.spacing(2),
            justifyContent: 'center',
        },
        Autocomplete: {
            display: 'flex',
            flexDirection: 'column',
        },
        ListContainer: {
            display: 'flex',
            padding: '10px 8px',
            flexDirection: 'column',
            color:'black',
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
            fontFamily:'mont',
            fontSize:12
        },
        titleDescription:{
            fontFamily:'mont',
            
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
            paddingTop: 4,
            fontSize: 18,
            display: 'flex',
            fontFamily:'mont',
            height: theme.spacing(5),
            '&:before': {
                content: 'none',
            },
            '&:after': {
                content: 'none'
            }
        },
        suggestions: {
            backgroundColor: 'red',
            height: theme.spacing(40),
            zIndex: 10
        }
    };
});

export default AutocompleteStyle