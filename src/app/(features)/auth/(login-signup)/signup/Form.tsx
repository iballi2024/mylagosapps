import { Grid, Text, TextInput } from "@mantine/core";
import Link from "next/link";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";
import { isEmail, useForm } from "@mantine/form";
import CustomPasswordInput from "./CustomPasswordInput";
import { createAuthService } from "@/src/app/services/auth.service";
import { toast } from "react-toastify";

const _authSvc = createAuthService();

type FormValues = {
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
  confirm_password: string;
};

export default function Form({
  setIsActivationRequestSent,
}: {
  setIsActivationRequestSent: React.Dispatch<React.SetStateAction<boolean>>;
  // setIsActivationRequestSent: (payload: boolean) => void;
}) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      full_name: "",
      phone_number: "",
      confirm_password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: (value: string): string | null =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
      full_name: (value: string): string | null =>
        value.length >= 2 ? null : "Full name must be at least 2 characters",
      phone_number: (value: string): string | null =>
        value.length >= 10
          ? null
          : "Phone number must be at least 10 characters",
      confirm_password: (value: string): string | null =>
        value === form.values.password ? null : "Passwords must match",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const response = await _authSvc.signUp({
        email: values.email,
        password: values.password,
        full_name: values.full_name,
        phone_number: values.phone_number,
      });
      console.log({ response });
      toast.success(
        response.data.message ? response.data.message : "Sign up successful",
      );
      form.reset();
      setIsActivationRequestSent(true);
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
              label="Full Name"
              required
              key={form.key("full_name")}
              {...form.getInputProps("full_name")}
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
              key={form.key("phone_number")}
              {...form.getInputProps("phone_number")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <CustomPasswordInput form={form} />

            {/* <PasswordInput
                label="Password"
                key={form.key("password")}
                {...form.getInputProps("password")}
              /> */}
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
              and <Link href="#" className="underline!">Privacy Policy</Link>
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
