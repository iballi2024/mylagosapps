/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { DataService } from "@/app/services/data.service";
// import PageLoader from "@/app/shared/components/PageLoader";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// Define the context value type
interface ProtectedRouteContextType {
  isPageLoading: false;
}

// Provide a default value (use null if unavailable initially)
const ProtectedRouteContext = createContext<ProtectedRouteContextType | null>(
  null
);

export const ProtectedRoute = ({ children }: any) => {
  // const isPageLoading = useSelector((state: any) => state.UI?.isPageLoading);
  const isPageLoading = false;

  /** */
  const router = useRouter();
  const pathname = usePathname();

  // const _userSvc = useRef(new DataService("/user/current"));

  useEffect(() => {
    // const getCurrentUser = async () => {
    //   try {
    //     const currentUser = await _userSvc.current.getData();
    //     if (currentUser) return;
    //     router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
    //   } catch (error: any) {
    //     if (error) {
    //       router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
    //     }
    //   }
    // };
    // getCurrentUser();
    return () => {};
  }, [pathname, router]);

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
