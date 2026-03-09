import { useContext } from "react";
import { AuthStoreContext } from "./auth.store";

export const useAuth = () => useContext(AuthStoreContext);
