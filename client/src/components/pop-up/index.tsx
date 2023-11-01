import { useState } from "react"

import { Container, Modal, Typography } from '@mui/material';

import { useTypeSelector } from '@/hooks/redux';

import { PopUpProps } from './interfaces';
import PopUpStyle from './styled';

export const PopUp = ({ text }: PopUpProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const usePopUpStyle = PopUpStyle({ Pallete: pallete })
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
