import { useState } from 'react'
import { Box, Typography, List, Input } from "@mui/material"
import Autocomplete from "components/Autocomplete/index.tsx";
import CardFavorite from 'components/CardFavorite/index.tsx';
import { useAppDispatch, useTypeSelector } from 'hooks/redux.ts';

import { DrawerStyle, DrawerContent } from './styled.ts'
import { SideBarProps } from "./interfaceProps.ts";
import { Waiter } from "components/Waiter/index.tsx";
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