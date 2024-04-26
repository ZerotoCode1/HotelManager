import PopupService from "@/services/popupPage";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useEffect } from "react";

export interface PopupConfirmProps {
  visible: boolean;
  content?: React.ReactNode | string;
  onHidePopup?: () => void;
}

const PopupConfirm = (props: PopupConfirmProps) => {
  const { visible, onHidePopup, content } = props;
  const theme = useTheme();
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;

  const onHanldeHidePopup = () => {
    onHidePopup ? onHidePopup() : PopupService?.instance?.current?.close();
  };

  return (
    <Box style={{ ...theme.custom.overlay }}>
      <Box sx={{ width: { xs: "100%", md: "500px" }, background: "white", padding: "16px", borderRadius: "16px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
          onClick={onHanldeHidePopup}
          style={{ float: "right", cursor: "pointer" }}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <Box className="">{content}</Box>
      </Box>
    </Box>
  );
};
export default PopupConfirm;
