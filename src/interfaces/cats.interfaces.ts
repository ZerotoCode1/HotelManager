import { AxiosResponse } from "axios";

export interface FiltterCats {
  page: number;
  page_size: number;
}

export interface ListCats {
  id: string;
  url: string;
  width: number;
  height: number;
}

export type ResponseCats = AxiosResponse<ListCats[]>;
