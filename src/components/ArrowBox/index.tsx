import { Box, Container } from '@mui/system';
import openDrawerArrow from 'assets/img/arrowDisableDrawer.svg'

import ArrowBoxStyle from './styled';
import { useAppDispatch } from 'hooks/redux';
import { setCurrentStatus } from 'store/reducers';

function ArrowBox() {
    const dispatch = useAppDispatch()
    const useArrowBoxStyle = ArrowBoxStyle()
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    return (
        <Box onClick={() => switchCurrentStatus('favorites')} className={useArrowBoxStyle.classes.boxArrow}>
            <Container disableGutters className={useArrowBoxStyle.classes.containerArrow}>
                <img
                    src={openDrawerArrow}
                    className={useArrowBoxStyle.classes.arrowShowMore}
                    alt=''
                />
            </Container>
        </Box>
    );
}

export default ArrowBox;
