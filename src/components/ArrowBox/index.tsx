import { Box, Container } from '@mui/system';
import openDrawerArrow from 'assets/img/DrawerActions/CloseDrawerButton/arrowDisableDrawer.svg'
import { useAppDispatch } from 'hooks/redux';
import DoesntExistPhoto from 'public/doesntExist.png'
import { setCurrentStatus } from 'store/reducers';

import ArrowBoxStyle from './styled';

function ArrowBox() {
    const dispatch = useAppDispatch()
    const useArrowBoxStyle = ArrowBoxStyle()
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const swtchCurretnStatusToFavorite = () => {
        switchCurrentStatus('favorites')
    }
    return (
        <Box onClick={swtchCurretnStatusToFavorite} className={useArrowBoxStyle.classes.boxArrow}>
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
