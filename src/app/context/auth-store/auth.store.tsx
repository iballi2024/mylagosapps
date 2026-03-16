"use client";
import React, { useEffect, useState } from "react";
import type { StateError } from "../../models/types/state-error.type.";
import { log } from "../../helpers/logInConsole";

export type AuthStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  
  error: StateError | null;
  setError: (error: StateError | null) => void;
};

const initialGlobalState: AuthStore = {
  isLoading: false,
  setIsLoading: () => {},

  isAuthenticated: false,
  setIsAuthenticated: () => {},
  
  error: null,
  setError: () => {},
};

const AuthStoreContext = React.createContext<AuthStore>(initialGlobalState);

const AuthStoreProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
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
    <AuthStoreContext.Provider
      value={{
        isLoading,
        error,
        isAuthenticated,
        setIsLoading,
        setIsAuthenticated,
        setError,
      }}
    >
      {children}
    </AuthStoreContext.Provider>
  );
};

export { AuthStoreProvider, AuthStoreContext };
