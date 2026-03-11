import type { StateError } from "@/models/types/state-error.type";
import { createContext, useState } from "react";

// Define the context value type
export interface AccountContextType {
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;


  error: StateError;
  handleSetError: (error: StateError) => void;
}

const AccountContext = createContext<AccountContextType>({
  isLoading: false,
  setIsLoading: () => { },

  error: {
    message: '',
    originalError: null,
  },
  handleSetError: () => { },
});

const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<StateError>({
    message: "",
    originalError: null,
  });

  /**Validate loading payload */
  const setIsLoading = (payload: boolean) => {
    if (typeof payload === "boolean") {
      setIsLoading(payload);
    } else {
      console.error("Invalid payload for isLoading:", payload);
    }
  };


  /**Validate error payload */
  const handleSetError = (error: StateError) => {
    if (error && typeof error.message === "string") {
      setError(error);
    } else {
      console.error("Invalid error object:", error);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        handleSetError
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountProvider };