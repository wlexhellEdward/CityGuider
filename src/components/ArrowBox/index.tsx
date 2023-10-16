import { Box, Container } from '@mui/system';
import openDrawerArrow from 'assets/img/arrowDisableDrawer.svg'

import ArrowBoxStyle from './styled';
import { useAppDispatch } from 'hooks/redux';
import { setCurrentStatus } from 'store/reducers';
import DoesntExistPhoto from 'public/doesntExist.jpg'



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
