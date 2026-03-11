import { Box, Grid, Text, TextInput } from "@mantine/core";
import Link from "next/link";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";
import CustomPasswordInput from "./CustomPasswordInput";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "./page";
import FormFieldsError from "@/src/app/shared/components/FormFieldsError";

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
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid gutter={22}>
          <Grid.Col span={12}>
            <TextInput
              label="Full Name"
              required
              key={form.key("fullName")}
              {...form.getInputProps("fullName")}
            />
          </Grid.Col>
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
              label="Phone Number"
              required
              key={form.key("phone")}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <CustomPasswordInput form={form} />
            {/* <Text component="small" fz={14}>
                Your password must be at least 8 characters long, contain at
                least one uppercase letter, one lowercase letter, and one
                number.
              </Text>
             */}
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
            <Text fz={14}>
              By creating an account, you agree to our{" "}
              <Link href="#" className="underline!">
                Terms of use
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline!">
                Privacy Policy
              </Link>
            </Text>

            <PrimaryBtn
              type="submit"
              title="Create account"
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
