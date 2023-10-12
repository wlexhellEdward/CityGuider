import { makeStyles } from 'tss-react/mui';

const greyColor = '#EEEEEE'

const AutocompleteStyle = makeStyles()((theme) => {
    const borderRadius = theme.spacing(1)
    return {
        containerInput: {
            borderRadius: borderRadius,
            padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: theme.spacing(8),
        },
        Autocomplete: {
            display: 'flex',
            border: `1px solid ${greyColor}`,
            flexDirection: 'column',
        },
        ListContainer: {
            display: 'flex',
            padding: '10px 8px',
            maxWidth: '96%',
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
            paddingLeft: theme.spacing(2),
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
            width: theme.spacing(50),
            height: theme.spacing(40),
            zIndex: 10
        }
    };
});

export default AutocompleteStyle