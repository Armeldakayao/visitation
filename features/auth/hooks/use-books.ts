import { createQuery } from "react-query-kit";
import api from "#lib/axios-config";

export const useBooks = createQuery({
  queryKey: ["/books/"],
  fetcher: (): Promise<any> => {
    // const queries = paramsBuilder(variables);
    const data = api.get("/books/");
    return data;
  },
});
