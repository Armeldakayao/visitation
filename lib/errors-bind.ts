import toast from "react-hot-toast";
import { AxiosError } from "axios";

export function errorsBind<T = { body: string }>(errors: AxiosError<T>): void {
  switch (errors.status) {
    case 404:
      console.log({ errors, response: errors.response });
      // @ts-ignore
      toast.error(errors.response?.data.body);
      break;
    case 409:
      console.log({ errors, response: errors.response });
      // @ts-ignore
      toast.error(errors.response?.data.body);
      break;
    default:
      toast.error("An error occur");
      break;
  }
}
