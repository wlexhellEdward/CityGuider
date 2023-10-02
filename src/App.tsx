import SideBar from './components/Drawer/SideBar'
import Aside from './components/Aside/Aside'
import Container from '@mui/material/Container'
import { useTypeSelector, useAppDispatch } from './hooks/redux'
import { setCenter, setCurrentStatus } from './store/reducers'
import React, { useEffect, useState } from 'react'
import { useJsApiLoader, Libraries } from "@react-google-maps/api";
import { Box } from '@mui/material'
import AppStyle from './AppStyle'
import arrowDisableDrawer from './assets/img/arrowDisableDrawer.svg'
import Map from './components/Map/Map'
import useOnclickOutside from "react-cool-onclickoutside";

import { getBrowserLocation } from './utils/geo';

const libraries: Libraries = ['places']


function App() {
  const dispatch = useAppDispatch()
  const currentStatus = useTypeSelector(state => state.currentStatus.status)

  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false)

  const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
  const useAppStyle = AppStyle();

  const handleSetSearchButtonIsClicked = () => {
    setSearchButtonIsClicked(true)
    setTimeout(() => setSearchButtonIsClicked(false), 1)
  }




  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDTA2iAnMibajMRsRHrYmAldVNOPxGhE94",
    libraries: libraries,
  });





  const ref = useOnclickOutside(() => {
    setCurrentStatus('close')
  });



  return (
    <>

      <Box className={useAppStyle.classes.containerApp} >
        <Aside />
        {currentStatus != 'close' ?
          <Container ref={ref} disableGutters className={useAppStyle.classes.containerSideBar}>
            <SideBar
              handleSetSearchButtonIsClicked={handleSetSearchButtonIsClicked}
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
