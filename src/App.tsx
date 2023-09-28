import SideBar from './components/Drawer/SideBar'
import Aside from './components/Aside/Aside'
import Container from '@mui/material/Container'
import React from 'react'
import Box from '@mui/material/Box'
import AppStyle from './AppStyle'
import arrowDisableDrawer from './assets/img/arrowDisableDrawer.svg'
import Map from './components/Map/Map'


function App() {
  const [currentStatus, setCurrentStatus] = React.useState('close');
  const useAppStyle = AppStyle();
  const handleDrawerSwitch = (name: string) => {
    setCurrentStatus(name);
  };



  return (
    <>
    
      <Box className={useAppStyle.classes.containerApp} >
        <Aside currentStatus={currentStatus} handleDrawerSwitch={handleDrawerSwitch} />
        {currentStatus != 'close' ?
          <Container disableGutters className={useAppStyle.classes.containerSideBar}>
            <SideBar currentStatus={currentStatus} />
          </Container>
          : <>
            <Box className={useAppStyle.classes.boxArrow}>
              <Container className={useAppStyle.classes.containerArrow}>
                <img src={arrowDisableDrawer} className={useAppStyle.classes.arrowShowMore} onClick={() => setCurrentStatus('favorites')} alt="" />
              </Container>
            </Box></>
        }
        <Map />
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
