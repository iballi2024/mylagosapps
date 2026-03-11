import React from "react";
import { FormValues } from "./page";
import { UseFormReturnType } from "@mantine/form";
import FormFieldsError from "@/src/app/shared/components/FormFieldsError";
import { Grid, TextInput } from "@mantine/core";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";

export default function Form({
  form,
  handleSubmit,
  formFieldsErrors,
}: {
  handleSubmit: (values: FormValues) => Promise<void>;
  form: UseFormReturnType<FormValues>;
  formFieldsErrors: string[];
}) {
  return (
    <>
      <FormFieldsError formFieldsErrors={formFieldsErrors} />

      <form
        // className="mb-20 bg-red-300!"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Grid gutter={5}>
          <Grid.Col span={12}>
            <TextInput
              type="email"
              label="Email address"
              required
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PrimaryBtn
              type="submit"
              title="Send"
              size="lg"
              fullWidth={true}
              loading={form.submitting}
              disabled={form.submitting}
              className="mt-6"
            />
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
}
