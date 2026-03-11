import { Box } from "@mantine/core";
import React from "react";

export default function FormFieldsError({
  formFieldsErrors,
}: {
  formFieldsErrors: string[];
}) {
  return (
    <>
      {formFieldsErrors.length > 0 && (
        <Box
          component="ul"
          className="list-disc list-inside text-red-500 bg-red-100 p-2 rounded text-sm mb-4"
        >
          {formFieldsErrors.map((err, index) => (
            <Box component="li" key={index}>
              {err}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}
