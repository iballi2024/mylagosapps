"use client";
import { Grid, Text, TextInput } from "@mantine/core";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";
import Link from "next/link";
import { UseFormReturnType } from "@mantine/form";
import FormFieldsError from "@/src/app/shared/components/FormFieldsError";
import { FormValues } from "./Content";

export default function Form({
  formFieldsErrors,
  handleSubmit,
  form,
}: {
  formFieldsErrors: string[];
  handleSubmit: (values: FormValues) => Promise<void>;
  form: UseFormReturnType<FormValues>;
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
            <TextInput
              type="email"
              label="Email address"
              required
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <TextInput
              type="password"
              label="Password"
              required
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            {/* <p className="text-right mt-2"> */}
            <Text fz={14} c={"#6B7280"} mt={5} ta={"right"}>
              <Link href="/auth/forgot-password">Forgot password?</Link>
            </Text>
            {/* </p> */}
          </Grid.Col>

          <Grid.Col span={12}>
            <PrimaryBtn
              type="submit"
              title="Create account"
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
