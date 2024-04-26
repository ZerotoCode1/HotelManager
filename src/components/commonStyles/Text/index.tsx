import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends TypographyProps {
  children: ReactNode;
}

const Text = (props: Props) => {
  const { children, ...params } = props;
  return (
    <div>
      <Typography {...params}>{children}</Typography>
    </div>
  );
};

export default Text;
