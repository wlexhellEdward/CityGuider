import { Box } from '@mui/material'
import Aside from 'components/Aside'
import Map from 'components/Map'

import AppStyle from './AppStyle'




function App() {
  const useAppStyle = AppStyle();
  return (
    <Box className={useAppStyle.classes.containerApp}>
      <Aside />
      <Map />
    </Box>
  );
}
export default App



