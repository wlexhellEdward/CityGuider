import { Container, Modal, Typography } from '@mui/material';
import { useState } from "react"

import { PopUpProps } from './interfaces';
import PopUpStyle from './styled';

export default function PopUp({ text }: PopUpProps) {

    const usePopUpStyle = PopUpStyle()
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Container className={usePopUpStyle.classes.popUpContainer}>
                    <Typography>{text}</Typography>
                </Container>
            </Modal >
        </>
    );
}
