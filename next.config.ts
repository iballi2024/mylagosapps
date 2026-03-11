import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  
  /**Redirecting pages */
  async redirects() {
    return [
      // {
      //   source: "/", // The route you want to redirect from
      //   destination: "/auth/login", // The target route
      //   permanent: true, // Indicates a permanent redirect (308)
      // },
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
