import { ThemeApp } from 'models/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const AutocompleteStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        containerInput: {
            display: 'flex',
            backgroundColor: Pallete.background,
            alignItems: 'center',
            padding: '4px 8px',
            columnGap: theme.spacing(2),
            justifyContent: 'center',
        },
        Autocomplete: {
            display: 'flex',
            backgroundColor: Pallete.background,
            flexDirection: 'column',
        },
        ListContainer: {
            display: 'flex',
            padding: '10px 8px',
            backgroundColor: Pallete.background,
            flexDirection: 'column',
            color: 'black',
            borderTop: `1px solid ${Pallete.border}`
        },
        suggestionContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: Pallete.background,
            alignItems: 'start'
        },
        titleSuggestion: {
            fontWeight: 'bold',
            fontFamily: 'mont',
            color: Pallete.title,
            fontSize: 12
        },
        titleDescription: {
            color: Pallete.description,
            fontFamily: 'mont',
            fontSize: 10,
        },
        listItem: {
            backgroundColor: Pallete.background,
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
                backgroundColor: Pallete.border,
            }
        },
        searchImg: {
            opacity: 0.3,
            filter: 'invert(1)'
        },
        searchInput: {
            paddingTop: 4,
            fontSize: 16,
            display: 'flex',
            fontFamily: 'mont',
            height: theme.spacing(5),
            color: Pallete.title,
            '&:before': {
                content: 'none',
            },
            '&:after': {
                content: 'none'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 12,
            }
        },
        suggestions: {
            backgroundColor: Pallete.background,
            height: theme.spacing(40),
            zIndex: 10
        }
    }));

export default AutocompleteStyle