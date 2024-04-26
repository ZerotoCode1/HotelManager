import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  width?: number;
  height?: number;
  src: string;
  data: any;
}
const Image = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { src, width, height, data } = props;
  useEffect(() => {
    setIsLoading(true);
  }, [data]);

  return (
    <div>
      <div className="">
        <img src={src} alt="" onLoad={() => setIsLoading(false)} style={{ visibility: isLoading ? "hidden" : "visible" }} />
      </div>
      {isLoading && (
        <>
          <Skeleton variant="rounded" width={width} height={height} />
        </>
      )}
    </div>
  );
};

export default Image;
