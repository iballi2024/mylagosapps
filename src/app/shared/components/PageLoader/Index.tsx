"use client";
import { Box, Button, Group, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

export default function PageLoader() {
  //   const [visible, { toggle }] = useDisclosure(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const id = requestAnimationFrame(() => {
        setVisible(false);
      });
      return () => cancelAnimationFrame(id);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "primary", type: "bars" }}
      />
    </>
  );
}
