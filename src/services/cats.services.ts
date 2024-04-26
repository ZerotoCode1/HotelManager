import queryString from "query-string";
import httpServices from "./httpService";
import { FiltterCats, ResponseCats } from "@/interfaces/cats.interfaces";

class CatsServices {
  getListCats(body?: FiltterCats): Promise<ResponseCats> {
    const bodyCustom = { page: body?.page, limit: body?.page_size };
    return httpServices.axios.get(`https://api.thecatapi.com/v1/images/search?${queryString.stringify(bodyCustom || {})}`);
  }
}

export default new CatsServices();
