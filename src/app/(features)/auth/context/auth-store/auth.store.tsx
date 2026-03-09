"use client";
import React, { useEffect, useState } from "react";
import { StateError } from "@/src/app/models/types/state-error.type.";
import { log } from "@/src/app/helpers/logInConsole";

export type AuthStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  error: StateError | null;
  setError: (error: StateError | null) => void;
};

const initialAuthState: AuthStore = {
  isLoading: false,
  setIsLoading: () => {},

  error: null,
  setError: () => {},
};

const AuthStoreContext = React.createContext<AuthStore>(initialAuthState);

const AuthStoreProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<StateError | null>(null);

  useEffect(() => {
    log({
      Auth_STORE: {
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

        setIsLoading,
        setError,
      }}
    >
      {children}
    </AuthStoreContext.Provider>
  );
};

export { AuthStoreProvider, AuthStoreContext };
