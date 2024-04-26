import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "1200px",
      margin: "0 auto",
      [theme.breakpoints.only("lg")]: {
        width: "900px",
      },
    },
  };
});

const Container = ({ children }: Props) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Container;
