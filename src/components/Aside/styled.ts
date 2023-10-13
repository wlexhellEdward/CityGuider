import { makeStyles } from "tss-react/mui";

const greyColor = '#7D908C'


const AsideStyle = makeStyles()((theme) => {
    return {
        container:{
            display:'flex',
            alignItems:'start',
            justifyContent:'start',
            width:'auto'
        },
        asideContainer: {
            width:'100px',
            zIndex:11,
            margin:0,
            boxShadow: '8px 0px 5px -6px rgba(200, 200, 200, 0.6)',
            height: '100vh',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            color: "black",
            [theme.breakpoints.down('sm')]: {
                width:'50px',
            }
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 20,
            marginTop: 10,
            [theme.breakpoints.down('sm')]: {
                marginBottom:5,
                '&>img':{
                    height:25
                }
            },
        },
        listItems: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        listItemButton: {
            [theme.breakpoints.down('sm')]: {
                width:'40px',
                rowGap: theme.spacing(1),
                '&>div':{
                    width:'35px',
                }
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            width: 100,
            gap: 20,
            '& > *': { 
                cursor: 'pointer',
                transition:'.3s linear'
            },
        },
        itemButton: {
            cursor: 'pointer',
            marginBottom: 12,
            transition: '.3s linear',
        },
        profileOutter: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: theme.spacing(2),
            cursor:'pointer',
            [theme.breakpoints.down('sm')]:{
                '&>*':{
                    width:'32px'
                }
            }
        },
        containerButton:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            '&>*':{
                transition:'all .3s linear'
            },
            '&>*:hover':{
                transform:'scale(1.045)'
            },
            
        }

    }

})

export default AsideStyle