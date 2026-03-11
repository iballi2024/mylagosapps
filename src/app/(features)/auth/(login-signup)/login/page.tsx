"use client";
import AuthCard from "../components/AuthCard";
import Link from "next/link";
import { isEmail, useForm } from "@mantine/form";
import { createAuthService } from "@/src/app/services/auth.service";
import { toast } from "react-toastify";
import Form from "./Form";
import { useRouter } from "next/navigation";
import { log } from "@/src/app/helpers/logInConsole";
import { BadInputError, NotFoundError } from "@/src/app/common";
import { formatJoiFormErrors } from "@/src/app/helpers/formatJoiFormErrors";
import { useState } from "react";

const _authSvc = createAuthService();

export type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const [formFieldsErrors, setformFieldsErrors] = useState<string[]>([]);

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

  const resetformFieldsErrors = () => {
    if (formFieldsErrors.length > 0) {
      setformFieldsErrors([]);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    resetformFieldsErrors();
    try {
      const response = await _authSvc.login({
        identifier: values.email,
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
      console.log({ error });
      /**
       *
       */
      let message = "Failed to create an account!";
      const { response } = (
        error as {
          originalError: {
            response: {
              data: {
                data: unknown;
                message: string;
                success: boolean;
                error: string[];
              };
            };
          };
        }
      )?.originalError;

      if (error instanceof NotFoundError) {
        log({
          "Signup request not found": response,
        });
        message = "Request not found";
      }
      if (error instanceof BadInputError) {
        log({
          "Signup Validation error": response,
        });
        const formformFieldsErrors = formatJoiFormErrors(response.data.error);
        console.log({ formformFieldsErrors });
        setformFieldsErrors(formformFieldsErrors);
        message = response.data.message;
      }
      toast.error(message);
    }
  };

  return (
    <>
      <AuthCard
        title="Login"
        tagline={
          <>
            Don&lsquo;t have an account?{" "}
            <Link href="/auth/signup">Sign up</Link>
          </>
        }
      >
        <div className="mt-6"></div>
        <Form
          form={form}
          handleSubmit={handleSubmit}
          formFieldsErrors={formFieldsErrors}
        />
      </AuthCard>
    </>
  );
}
