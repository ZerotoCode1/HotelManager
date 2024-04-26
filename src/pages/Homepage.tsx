import { CommonStyles } from "@/components/commonStyles";
import { classCommon } from "@/consts/common";
import { useGetHeightHeader } from "@/hooks/useGetHeightHeader";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  const { height } = useGetHeightHeader(classCommon.header);

  return (
    <Box sx={{ height: `calc(100vh - ${height}px)`, alignItems: "center", display: "flex", justifyContent: "center" }}>
      <CommonStyles.Text variant="h2" align="center">
        {t("hello")}
      </CommonStyles.Text>
    </Box>
  );
};

export default Homepage;
