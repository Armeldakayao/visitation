import { createQuery } from "react-query-kit";
import api from "#lib/axios-config";

export const useGetMe = createQuery({
  queryKey: ["/auth/me"],
  fetcher: (): Promise<any> => {
    // const queries = paramsBuilder(variables);
    const data = api.get("/auth/me");
    return data;
  },
});
