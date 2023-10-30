import { ThemeApp } from 'models/IThemeApp';
import { makeStyles } from 'tss-react/mui';


const adminContentStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        title: {
            display: 'flex',
            font: 'mont',
            justifyContent: 'center',
            marginBottom: theme.spacing(5)
        },
        content: {
            margin: theme.spacing(10, 0, 10, 0),
            font: 'mont',
            color: 'black',
        },
        userContent: {
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            overflow:'hidden'
        },
        cardsUsers: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: theme.spacing(2),
        },
        cardUser: {
            color: Pallete.title,
            maxHeight:theme.spacing(30),
        },
        cardMedia: {
            height: theme.spacing(5),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&>*': {
                width: theme.spacing(5),
                height: theme.spacing(5)
            }
        },
        titleCarduser: {
            color: Pallete.title,
            font: 'mont'
        },
        cardContentLine: {
            display: 'flex',
            justifyContent: 'space-between',
            columnGap: theme.spacing(5),
            '&>*':{
                fontSize:theme.spacing(1.4)
            }
        },
        cardContent: {
            padding: 0,
            '&>*':{
                padding:theme.spacing(0.5,2,0,2)
            },
            '&>last-child':{
                padding:0,
            }
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        pagination:{
            font:'mont',
            margin:theme.spacing(2,0,5,0),
        }

    })
)

export default adminContentStyle