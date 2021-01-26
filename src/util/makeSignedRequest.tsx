import Axios from "axios";
import { getDomain } from "./env";
import { getToken } from "./jwt";

export const makeSignedRequest = (
  method: string,
  route: string,
  body?: object
) => {
  const url = `${getDomain()}${route}`;
  const config = { headers: { Authorization: `Bearer ${getToken()}` } };
  switch (method) {
    case "GET":
      return async () => await Axios.get(url, config);
    case "POST":
      return async () => await Axios.post(url, body, config);
    case "PATCH":
      return async () => await Axios.patch(url, body, config);
    case "DELETE":
      return async () => await Axios.delete(url, config);
    default:
      break;
  }
};
