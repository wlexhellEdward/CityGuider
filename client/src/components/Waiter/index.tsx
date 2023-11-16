import { Container, Typography } from "@mui/material";

import { useTypeSelector } from "@/hooks/redux";

import { WaiterProps } from "./interfaces";
import WaiterStyle from "./styled";

export const Waiter = ({ text }: WaiterProps) => {
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);

  const useWaiterStyle = WaiterStyle({ Pallete: pallete });
  return (
    <>
      <Container className={useWaiterStyle.classes.loaderContainer}>
        <Typography className={useWaiterStyle.classes.loaderText}>
          {text}
        </Typography>
      </Container>
    </>
  );
};
