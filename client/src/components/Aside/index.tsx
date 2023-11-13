import { useState } from 'react'

import { Box } from '@mui/material'

import Exit from '@/assets/img/drawerActions/exit.svg'
import ArrowBox from '@/components/ArrowBox'
import { AsideListItems } from '@/components/AsideListItems';
import { СonfirmModal } from '@/components/ConfirmModal'
import SideBar from '@/components/Drawer'
import { useTypeSelector } from '@/hooks/redux'

import AsideStyle from './styled'
import DoesntExistPhoto from '/public/doesntExist.png'


export default function Aside() {
    const [showModal, setShowModal] = useState(false)
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const handleClickProfile = () => {
        setShowModal(prev => !prev)
    }

    const useAsideStyle = AsideStyle({ Pallete: pallete })

    return (
        <Box className={useAsideStyle.classes.container}>
            <Box data-testid='aside' className={useAsideStyle.classes.asideContainer}>
                <AsideListItems />
                <Box className={useAsideStyle.classes.profileOutter}>
                    <img onClick={handleClickProfile} src={Exit} alt={DoesntExistPhoto} title='img for profile' />
                </Box>
                {showModal ?
                    <СonfirmModal isOpen={showModal} handleClose={handleClickProfile} />
                    :
                    null
                }
            </Box>
            {currentStatus !== 'close' ?
                <SideBar currentStatus={currentStatus} />
                :
                <ArrowBox />
            }
        </Box>
    )
}