import React, { useState, useImperativeHandle } from "react";
import PopupConfirm, { PopupConfirmProps } from "./Children/Popup";

export interface GlobalPopupConfirmRef {
  open: (data: PopupConfirmProps) => void;
  close: () => void;
}

const GlobalPopupConfirm = React.forwardRef((_props, ref) => {
  const [popupData, setPopupData] = useState<PopupConfirmProps>({
    visible: false,
  });

  useImperativeHandle(ref, () => ({
    open: (data: PopupConfirmProps) => {
      setPopupData(data);
    },
    close: () => {
      setPopupData({ visible: false });
    },
  }));

  return <PopupConfirm {...popupData} />;
});

export default GlobalPopupConfirm;
