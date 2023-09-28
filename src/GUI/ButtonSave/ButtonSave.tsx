import { Button, Icon } from '@mui/material'
import ButtonSaveStyle from './ButtonSaveStyle'


interface ButtonSaveProps {
    handleFunction: () => void,
    url: string;
}

export default function ButtonSave({ handleFunction, url }: ButtonSaveProps) {
    const useButtonSaveStyle = ButtonSaveStyle()
    return (
        <>
            <Button onClick={() => handleFunction()} className={useButtonSaveStyle.classes.btnSaved}>
                <Icon className={useButtonSaveStyle.classes.icon}>
                    <img src={url} alt="" />
                </Icon>
                Сохранено
            </Button>
        </>
    )
}
