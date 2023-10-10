import { Box, Container } from '@mui/material'
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import arrowDisableDrawer from 'assets/img/arrowDisableDrawer.svg'
import Aside from 'components/Aside'
import SideBar from 'components/Drawer'
import Map from 'components/Map'
import { RouteInfo } from 'components/RouteInfo'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import useOnclickOutside from "react-cool-onclickoutside";
import { setCurrentStatus, setTravelDistance } from 'store/reducers'

import AppStyle from './AppStyle'


const libraries: Libraries = ['places']


function App() {
  const dispatch = useAppDispatch()
  const currentStatus = useTypeSelector(state => state.currentStatus.status)
  const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
  const distance = useTypeSelector(state => state.map.travelInfo.distance)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDTA2iAnMibajMRsRHrYmAldVNOPxGhE94",
    libraries: libraries,
  });  // надо перенести в более уютное место

  const ref = useOnclickOutside(() => {
    switchCurrentStatus('close')
  });


  const useAppStyle = AppStyle();

  return (
    <>
      <Box className={useAppStyle.classes.containerApp} >
        <Aside />
        {currentStatus != 'close' ?
          <Container ref={ref} disableGutters className={useAppStyle.classes.containerSideBar}>
            <SideBar
              currentStatus={currentStatus}
              isLoaded={isLoaded}
            />
          </Container>
          : <>
            <Box className={useAppStyle.classes.boxArrow}>
              <Container className={useAppStyle.classes.containerArrow}>
                <img src={arrowDisableDrawer} className={useAppStyle.classes.arrowShowMore} onClick={() => switchCurrentStatus('favorites')} alt="" />
              </Container>
            </Box></>
        }
        <Map isLoaded={isLoaded} />
        {
          distance.kilometrs != "" ?
            <RouteInfo />
            :
            <></>
        }
      </Box>

    </>
  )

}
export default App
