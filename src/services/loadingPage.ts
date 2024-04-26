import { GlobalLoadingPage } from "@/components/Global/Loading";
import React from "react";
class LoadingPageService {
  static instance: React.MutableRefObject<GlobalLoadingPage>;
}

export default LoadingPageService;
