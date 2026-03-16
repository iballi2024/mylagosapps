/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { DataService } from "@/app/services/data.service";
// import PageLoader from "@/app/shared/components/PageLoader";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useRef } from "react";
import { createUserService } from "../services/user.service";
import { useAuth } from "../context/auth-store";
// import { useSelector } from "react-redux";

// Define the context value type
interface ProtectedRouteContextType {
  isPageLoading: false;
}

// Provide a default value (use null if unavailable initially)
const ProtectedRouteContext = createContext<ProtectedRouteContextType | null>(
  null,
);

const _userSvc = createUserService();

export const ProtectedRoute = ({ children }: any) => {
  // const isPageLoading = useSelector((state: any) => state.UI?.isPageLoading);
  const { setIsAuthenticated } = useAuth();
  const isPageLoading = false;

  /** */
  const router = useRouter();
  const pathname = usePathname();

  // const _userSvc = useRef(new DataService("/user/current"));

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await _userSvc.getCurrentUser();
        console.log({ currentUser });
        if (currentUser) {
          return setIsAuthenticated(true);
        }
        setIsAuthenticated(false);
        router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
      } catch (error: any) {
        if (error) {
          router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
        }
      }
    };
    getCurrentUser();
    return () => {};
  }, [pathname, router, setIsAuthenticated]);

  return (
    <ProtectedRouteContext.Provider value={{ isPageLoading }}>
      {/* {isPageLoading && (
        <div className="page-loader">
          <PageLoader />
        </div>
      )} */}
      {children}
    </ProtectedRouteContext.Provider>
  );
};

// Hook to use the context
export const useProtectedRoute = () => useContext(ProtectedRouteContext);
