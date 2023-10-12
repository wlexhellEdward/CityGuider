import { Box } from '@mui/material'
import Aside from 'components/Aside'
import Map from 'components/Map'

import AppStyle from './AppStyle'
import SideBarContainer from 'components/SideBarContainer';




function App() {
  const useAppStyle = AppStyle();
  return (
    <Box className={useAppStyle.classes.containerApp}>
      <Aside />
      <SideBarContainer />
      <Map />
    </Box>
  );
}
export default App



