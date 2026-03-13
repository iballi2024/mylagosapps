import { environment } from "../environment/environment";

export const getToken = () => sessionStorage.getItem(environment.tokenKey);