import { environment } from "../environment/environment";

export const setToken = (token: string) => {
  sessionStorage.setItem(environment.tokenKey, token);
};
