import SideBar from './components/Drawer'
import Aside from './components/Aside'
import { Container } from '@mui/material'
import { useTypeSelector, useAppDispatch } from './hooks/redux'
import { setCurrentStatus, setTravelKilometrs } from './store/reducers'
import { useJsApiLoader, Libraries } from "@react-google-maps/api";
import { Box } from '@mui/material'
import arrowDisableDrawer from './assets/img/arrowDisableDrawer.svg'
import Map from './components/Map'
import useOnclickOutside from "react-cool-onclickoutside";
import AppStyle from './AppStyle'
import { RouteInfo } from './components/RouteInfo'


const libraries: Libraries = ['places']


function App() {
  const dispatch = useAppDispatch()
  const currentStatus = useTypeSelector(state => state.currentStatus.status)
  const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
  const travelInfo = useTypeSelector(state => state.map.travelInfo)
  const handlerSetTravelKilometrs = (kilometrs: string) => {
    console.log("qwe")
    dispatch(setTravelKilometrs(kilometrs))
  }

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
          travelInfo.distance != "" ?
            <RouteInfo key={travelInfo.distance} distance={travelInfo.distance.kilometrs} handlerSetTravelKilometrs={() => handlerSetTravelKilometrs("")} />
            :
            <></>
        }
      </Box>

    </>
  )

}
export default App



















// <SideBar currentStatus={currentStatus} />
// {/* <Box className={useAppStyle.classes.boxArrowOpen}>
//   <Container className={useAppStyle.classes.containerArrow}>
//     <img src={arrowDisableDrawer} onClick={() => setCurrentStatus('close')} alt="" />
//   </Container>
// </Box> */}
// </Container>
// :<></>
// // <Box className={useAppStyle.classes.boxArrow}>
// //   <Container className={useAppStyle.classes.containerArrow}>
// //     <img src={arrowDisableDrawer} className={useAppStyle.classes.arrowShowMore} onClick={() => setCurrentStatus('favorites')} alt="" />
// //   </Container>
// // </Box>
// }
