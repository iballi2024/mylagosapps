import { useContext } from "react";
import { AuthStoreContext } from "./auth.store";

export const useGlobal = () => useContext(AuthStoreContext);
