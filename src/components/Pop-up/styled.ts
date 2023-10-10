import { makeStyles } from "tss-react/mui";


const PopUpStyle = makeStyles()((theme) => {
    return {
        popUpContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: theme.spacing(20),
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.3)',
            padding: theme.spacing(4),
        },
    }
})

export default PopUpStyle