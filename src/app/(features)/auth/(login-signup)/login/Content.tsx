"use client";
import AuthCard from "../components/AuthCard";
import Link from "next/link";
import { isEmail, useForm } from "@mantine/form";
import { createAuthService } from "@/src/app/services/auth.service";
import { toast } from "react-toastify";
import Form from "./Form";
import { useRouter, useSearchParams } from "next/navigation";
import { log } from "@/src/app/helpers/logInConsole";
import {
  BadInputError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "@/src/app/common";
import { formatJoiFormErrors } from "@/src/app/helpers/formatJoiFormErrors";
import { useState } from "react";
import { Text } from "@mantine/core";
import { OriginalError } from "@/src/app/models/types/server-error";
import { environment } from "@/src/app/environment/environment";
import { setToken } from "@/src/app/helpers/setToken";

const _authSvc = createAuthService();

export type FormValues = {
  email: string;
  password: string;
};

export default function Content() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get query parameters

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
    const redirectTo = searchParams.get("redirectTo") || "/user-account"; // Default to dashboard if no `redirectTo`
    resetformFieldsErrors();
    try {
      const response = await _authSvc.login({
        identifier: values.email,
        password: values.password,
      });
      log({ response });
      setToken(response.data.token);
      toast.success(
        response.data.message
          ? response.data.message
          : "You are successfully logged in",
      );
      form.reset();
      router.push(redirectTo);
    } catch (error: unknown) {
      log({ error });
      let message = "Authentication failed!";
      const response = (error as OriginalError)?.originalError;
      console.group({ response, is: error instanceof NotFoundError });

      if (error instanceof NotFoundError) {
        log({
          "Login request": message,
          REQUEST: "NotFoundError",
        });
        if (response.error) {
          const formformFieldsErrors = formatJoiFormErrors(response.error);
          setformFieldsErrors(formformFieldsErrors);
        }
        message = response.message || "Login request not found";
      }
      if (error instanceof UnauthorizedError) {
        log({
          "Login request": message,
          REQUEST: "UnauthorizedError",
        });
        if (response.error) {
          const formformFieldsErrors = formatJoiFormErrors(response.error);
          setformFieldsErrors(formformFieldsErrors);
        }
        message = response.message || "Login request not found";
      }
      if (error instanceof BadInputError) {
        log({
          "Login request": response,
          REQUEST: "BadInputError",
        });
        if (response.error) {
          const formformFieldsErrors = formatJoiFormErrors(response.error);
          setformFieldsErrors(formformFieldsErrors);
        }
        message = response?.message || "Invalid email or password";
      }
      if (error instanceof ForbiddenError) {
        log({ "Forbidden error": response, REQUEST: "ForbiddenError" });
        if (response.error) {
          const formformFieldsErrors = formatJoiFormErrors(response.error);
          setformFieldsErrors(formformFieldsErrors);
        }
        message =
          response.message || "You are not allowed to perform this action";
      }
      toast.error(message);
    }
  };

  return (
    <>
      <AuthCard
        title="Login"
        foot={
          <Text ta={"center"} mt={6}>
            Don&lsquo;t have an account?{" "}
            <Link href="/auth/signup" className="font-semibold">
              Sign up
            </Link>
          </Text>
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
