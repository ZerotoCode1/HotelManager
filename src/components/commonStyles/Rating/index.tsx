import { Rating as RatingMui } from "@mui/material";

interface Props {
  value: number;
}

const Rating = (props: Props) => {
  const { value } = props;
  return <RatingMui value={value} />;
};

export default Rating;
