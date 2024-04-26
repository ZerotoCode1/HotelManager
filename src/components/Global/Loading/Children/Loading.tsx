import { CircularProgress } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useEffect } from "react";

export interface ILoadingGlobal {
  visible?: boolean;
}

const LoadingPage = (props: ILoadingGlobal) => {
  const { visible } = props;
  const theme = useTheme();
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  return (
    <>
      <div
        style={{
          ...theme.custom.overlay,
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
};
export default LoadingPage;
