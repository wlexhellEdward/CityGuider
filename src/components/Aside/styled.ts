import { makeStyles } from "tss-react/mui";

const greyColor = '#7D908C'


const AsideStyle = makeStyles()((theme) => {
    return {
        asideContainer: {
            width:120,
            zIndex:1,
            margin:0,
            boxShadow: '8px 0px 5px -6px rgba(200, 200, 200, 0.6)',
            height: '100vh',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            color: "black",
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 20,
            marginTop: 10
        },
        listItems: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        listItemButton: {
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
            marginBottom: 8,
            cursor:'pointer'
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
            }
        }

    }

})

export default AsideStyle