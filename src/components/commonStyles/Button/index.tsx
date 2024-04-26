import { Button as ButtonMui, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = (props: Props) => {
  const { children, ...params } = props;
  return (
    <ButtonMui {...params} sx={{ fontWeight: 600 }}>
      {children}
    </ButtonMui>
  );
};

export default Button;
