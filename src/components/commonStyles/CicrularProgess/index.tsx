import { CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
}

const CicrularProgress = (props: Props) => {
  const { open } = props;
  return <>{open && <CircularProgress />}</>;
};

export default CicrularProgress;
