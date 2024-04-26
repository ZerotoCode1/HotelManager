import { GlobalPopupConfirmRef } from "@/components/Global/Popup";
import React from "react";

class PopupService {
  static instance: React.MutableRefObject<GlobalPopupConfirmRef>;
}

export default PopupService;
