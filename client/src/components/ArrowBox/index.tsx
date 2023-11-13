import { Box, Container } from '@mui/system';

import openDrawerArrow from '@/assets/img/drawerActions/closeDrawerButton/arrowDisableDrawer.svg'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setCurrentStatus } from '@/store/reducers';

import ArrowBoxStyle from './styled';
import DoesntExistPhoto from '/public/doesntExist.png'

function ArrowBox() {
    const dispatch = useAppDispatch()
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const swtchCurretnStatusToFavorite = () => {
        switchCurrentStatus('favorites')
    }
    const useArrowBoxStyle = ArrowBoxStyle({ Pallete: pallete })

    return (
        <Box data-testid='drawer-arrow-show-more' onClick={swtchCurretnStatusToFavorite} className={useArrowBoxStyle.classes.boxArrow}>
            <Container disableGutters className={useArrowBoxStyle.classes.containerArrow}>
                <img
                    src={openDrawerArrow}
                    className={useArrowBoxStyle.classes.openDrawerArrow}
                    alt={DoesntExistPhoto}
                    title='openDrawerArrow'
                />
            </Container>
        </Box>
    );
}

export default ArrowBox;
