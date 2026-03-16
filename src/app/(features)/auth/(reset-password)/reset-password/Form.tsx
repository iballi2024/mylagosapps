import React from "react";
import { UseFormReturnType } from "@mantine/form";
import FormFieldsError from "@/src/app/shared/components/FormFieldsError";
import { Grid, TextInput } from "@mantine/core";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";
import CustomPasswordInput from "../../(login-signup)/signup/CustomPasswordInput";
import { FormValues } from "./Content";

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
        <Grid gutter={20}>
          <Grid.Col span={12}>
            {/* <TextInput
              type="password"
              label="New Password"
              required
              key={form.key("password")}
              {...form.getInputProps("password")}
            /> */}
            <CustomPasswordInput form={form} identifier="newPassword" label="New Password" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              type="password"
              label="Confirm Password"
              required
              key={form.key("confirm_password")}
              {...form.getInputProps("confirm_password")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PrimaryBtn
              type="submit"
              title="Reset Password"
              size="lg"
              fullWidth={true}
              loading={form.submitting}
              disabled={form.submitting}
            />
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
}
