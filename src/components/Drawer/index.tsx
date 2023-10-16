import { Box } from "@mui/material"
import Autocomplete from "components/Autocomplete/index.tsx";
import { PlateFavorites } from 'components/PlateFavorites/index.tsx';
import { PlateSearchPlaces } from 'components/PlateSearchPlaces/index.tsx';

import { SideBarProps } from "./interfaces.ts";
import { DrawerContent,DrawerStyle } from './styled.ts'

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

