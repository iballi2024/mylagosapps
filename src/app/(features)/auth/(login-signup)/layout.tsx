"use client";
import { Grid } from "@mantine/core";
import React from "react";

export default function LoginSignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Grid overflow="hidden" align="stretch" bg="red" className="items-stretch!">
        <Grid.Col span={{ base: 12, md: 6 }} bg={'black'}>A</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>{children}</Grid.Col>
      </Grid> */}

      {/* <div className="grid grid-cols-12 items-stretch h-screen">
        <div className="col-span-12 md:col-span-6 bg-dark-9/60">A</div>
        <div className="col-span-12 md:col-span-6">{children}</div>
      </div> */}
      <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen">
        <div className="hidden md:flex col-span-12 md:basis-[48%] bg-dark-9/60 place-content-center place-items-center">
          Sliders and other controls
        </div>
        <div className="col-span-12 md:basis-[52%] flex flex-col place-content-center items-center p-2">
          {children}
        </div>
      </div>
    </>
  );
}
