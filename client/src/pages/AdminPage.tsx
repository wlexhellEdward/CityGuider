import { Box, Typography } from "@mui/material";

import { Bar } from "@/components/AdminComponents/Bar";
import { MainContent } from "@/components/AdminComponents/MainContent";
import { useTypeSelector } from "@/hooks/redux";

import PageStyle from "./styled";

export function AdminPage() {
  const admin = useTypeSelector((state) => state.userSlice.role);
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const usePageStyle = PageStyle({ Pallete: pallete });
  if (admin) {
    return (
      <Box className={usePageStyle.classes.containerApp}>
        <Bar />
        <MainContent />
      </Box>
    );
  } else {
    return (
      <Box className={usePageStyle.classes.containerCatcher}>
        <Typography>Вы точно должны быть здесь?</Typography>
      </Box>
    );
  }
}
