"use client";
import React, { useEffect, useState } from "react";
import type { StateError } from "../../models/types/state-error.type.";
import { log } from "../../helpers/logInConsole";
import {
  useComputedColorScheme,
  useMantineTheme,
  MantineTheme,
} from "@mantine/core";
import { UseColorSchemeValue } from "@mantine/hooks";

export type GlobalStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  theme: MantineTheme | null;
  colorScheme: UseColorSchemeValue | null;
  error: StateError | null;
  setError: (error: StateError | null) => void;
};

const initialGlobalState: GlobalStore = {
  isLoading: false,
  setIsLoading: () => {},
  theme: null,
  colorScheme: null,
  error: null,
  setError: () => {},
};

const GlobalStoreContext = React.createContext<GlobalStore>(initialGlobalState);

const GlobalStoreProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<StateError | null>(null);

  useEffect(() => {
    log({
      GLOBAL_STORE: {
        isLoading,
        error,
      },
    });
  }, [isLoading, error]);

  return (
    <GlobalStoreContext.Provider
      value={{
        isLoading,
        error,
        theme,
        colorScheme,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </GlobalStoreContext.Provider>
  );
};

export { GlobalStoreProvider, GlobalStoreContext };
