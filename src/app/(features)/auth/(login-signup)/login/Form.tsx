"use client";
import { Grid, Text, TextInput } from "@mantine/core";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";
import { isEmail, useForm } from "@mantine/form";
import { createAuthService } from "@/src/app/services/auth.service";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const _authSvc = createAuthService();

type FormValues = {
  email: string;
  password: string;
};

export default function Form() {
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: (value: string): string | null =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const response = await _authSvc.login({
        email: values.email,
        password: values.password,
      });
      console.log({ response });
      toast.success(
        response.data.message
          ? response.data.message
          : "You are successfully logged in",
      );
      form.reset();
      router.push("/user-account");
    } catch (error: unknown) {
      console.error(error);
    }
  };
  return (
    <>
      <form
        // className="mb-20 bg-red-300!"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Grid gutter={22}>
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
              className="mt-6"
            />
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
}
