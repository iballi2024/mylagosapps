import { BackgroundImage, Box } from "@mantine/core";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Authentication */}
      <Box 
    //   maw={"100vw"} mah={"100vh"} bgsz={"cover"} bg="red"
    className="any"
      >
        <BackgroundImage
          src="/assets/images/auth-bg.webp"
          bgsz={"cover"}
          bgp={"bottom"}
          bgr={"no-repeat"}
          mih={'100vh'}
        >
          {/* Hello */}
          {children}
        </BackgroundImage>
      </Box>
    </>
  );
}
