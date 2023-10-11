import { Container } from '@mui/system';
import SideBar from 'components/Drawer';

import SideBarContainerStyle from './styled';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { setCurrentStatus } from 'store/reducers';
import { useGoogleMaps } from 'hooks/useGoogleMapsLoader';
import ArrowBox from 'components/ArrowBox';




function SideBarContainer() {

    const dispatch = useAppDispatch()

    const currentStatus = useTypeSelector(state => state.currentStatus.status)
    const isLoaded = useGoogleMaps()

    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const useSideBarContainerStyle = SideBarContainerStyle()

    const ref = useOnclickOutside(() => {
        switchCurrentStatus('close')
    });

    return (
        <>
            {currentStatus !== 'close' ?
                <Container ref={ref} disableGutters className={useSideBarContainerStyle.classes.containerSideBar}>
                    <SideBar currentStatus={currentStatus} isLoaded={isLoaded} />
                </Container>
                :
                <ArrowBox />
            }
        </>
    );
}

export default SideBarContainer;


