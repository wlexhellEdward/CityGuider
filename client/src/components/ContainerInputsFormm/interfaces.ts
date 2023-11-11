export interface ContainerInputsFormProps {
    props: {
        handles: {
            handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
            handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
            handleConfirmChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
        },
        formValidity: {
            email: boolean,
            error: string,
            strength: number,
            confirm: boolean,
            colorsOfProgres: string
        }
    }
}