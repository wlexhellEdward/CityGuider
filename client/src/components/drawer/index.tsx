import { Box } from "@mui/material"

import Autocomplete from "@/components/autocomplete/index.tsx";
import { PlateFavorites } from '@/components/plateFavorites/index.tsx';
import { PlateSearchPlaces } from '@/components/plateSearchPlaces/index.tsx';
import { useTypeSelector } from "@/hooks/redux.ts";

import { SideBarProps } from "./interfaces.ts";
import { DrawerContent, DrawerStyle } from './styled.ts'

export default function SideBar({ currentStatus }: SideBarProps) {
  const pallete = useTypeSelector(state => state.appSlice.Pallete)
  const useDrawerStyle = DrawerStyle({Pallete:pallete})
  
  return (
    <>
      <DrawerContent className={useDrawerStyle.classes.drawerContent}>
        <Box className={useDrawerStyle.classes.containerSearch}>
          <Autocomplete />
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

