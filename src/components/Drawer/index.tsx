import { Box } from "@mui/material"
import Autocomplete from "components/Autocomplete/index.tsx";

import { DrawerStyle, DrawerContent } from './styled.ts'
import { SideBarProps } from "./interfaces.ts";
import { PlateSearchPlaces } from 'components/PlateSearchPlaces/index.tsx';
import { PlateFavorites } from 'components/PlateFavorites/index.tsx';


export default function SideBar({ currentStatus, isLoaded }: SideBarProps) {
  const useDrawerStyle = DrawerStyle()

  return (
    <>
      <DrawerContent className={useDrawerStyle.classes.drawerContent}>
        <Box className={useDrawerStyle.classes.containerSearch}>
          <Autocomplete isLoaded={isLoaded} />
        </Box>
        <Box>
          {currentStatus == 'search' ?
            <PlateSearchPlaces />
            :
            <PlateFavorites />}
        </Box>
      </DrawerContent>
    </>
  );
}

