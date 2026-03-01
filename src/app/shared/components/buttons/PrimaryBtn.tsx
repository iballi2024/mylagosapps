import { Button, MantineProvider } from "@mantine/core";
import React from "react";
import { primaryButtonTheme } from "../../../theming/mantine-theming/buttons";

// export default function PrimaryBtn({ children }: { children: React.ReactNode }) {
export default function PrimaryBtn({ title, handleEvent, size="md" }: { title: string, handleEvent?: () => void, size?: string }) {
  return (
    <>
      <MantineProvider theme={primaryButtonTheme}>
        <Button color="primary" variant="filled" size={size} onClick={handleEvent}>
          {title}
        </Button>
      </MantineProvider>
    </>
  );
}
