import SideBar from './components/Drawer/SideBar'
import Aside from './components/Aside/Aside'
import Container from '@mui/material/Container'
import React, { useEffect, useState } from 'react'
import { useJsApiLoader, Libraries } from "@react-google-maps/api";
import Box from '@mui/material/Box'
import AppStyle from './AppStyle'
import arrowDisableDrawer from './assets/img/arrowDisableDrawer.svg'
import Map from './components/Map/Map'
import { getBrowserLocation } from './utils/geo';

const libraries: Libraries = ['places']


function App() {
  const [currentStatus, setCurrentStatus] = useState('close');
  const [center, setCenter] = React.useState({ lat: 51.5085300, lng: -0.1257400 })
  const useAppStyle = AppStyle();
  const handleDrawerSwitch = (name: string) => {
    setCurrentStatus(name);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCpvlHwgo1v5fqOAJEVGLO9VJEQQklycYA",
    libraries: libraries,
  });

  useEffect(() => {
    getBrowserLocation().then((currentLocation) => {
      setCenter(currentLocation)
    }).catch((defaultLocation) => {
      setCenter(defaultLocation)
    })
  }, [])

  return (
    <>

      <Box className={useAppStyle.classes.containerApp} >
        <Aside currentStatus={currentStatus} handleDrawerSwitch={handleDrawerSwitch} />
        {currentStatus != 'close' ?
          <Container disableGutters className={useAppStyle.classes.containerSideBar}>
            <SideBar currentStatus={currentStatus} isLoaded={isLoaded} />
          </Container>
          : <>
            <Box className={useAppStyle.classes.boxArrow}>
              <Container className={useAppStyle.classes.containerArrow}>
                <img src={arrowDisableDrawer} className={useAppStyle.classes.arrowShowMore} onClick={() => setCurrentStatus('favorites')} alt="" />
              </Container>
            </Box></>
        }
        <Map isLoaded={isLoaded} currentPostion={center} />
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
