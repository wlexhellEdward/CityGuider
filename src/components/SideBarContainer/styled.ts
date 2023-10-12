import { makeStyles } from 'tss-react/mui';


const greyColor = '#7D908C'

const SideBarContainerStyle = makeStyles()((theme) => {
    return {
        containerSideBar:{
            height: '100vh',
            // width: theme.spacing(65),
            overflow:'hidden',
            display: 'flex',
            left: theme.spacing(15),
            '&>*::-webkit-scrollbar': {
                width: 5
            },
            '&>*::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
            },
            '&>*::-webkit-scrollbar-thumb': {
                borderRadius: 4,
                backgroundColor: `${greyColor}`
            },
            overflowY: 'scroll',
        }
    };
});

export default SideBarContainerStyle