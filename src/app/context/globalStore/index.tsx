import { useContext } from "react";
import { GlobalStoreContext } from "./global.store";

export const useGlobal = () => useContext(GlobalStoreContext);
