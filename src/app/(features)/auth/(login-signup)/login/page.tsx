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

export default function Login() {
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

      /**
       * {
    "success": true,
    "message": "Login successful",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmcmVkcmlja2JkbkBnbWFpbC5jb20iLCJpYXQiOjE3NzMzOTU3NDMsImV4cCI6MTc3MzM5OTM0M30.Vzch7bLTDmVmJ4TvbY6Xwk--q0-zcQvwZTHboEIZi88",
        "user": {
            "id": 1,
            "fullName": "Ayokunle Updated",
            "email": "fredrickbdn@gmail.com",
            "phone": "08123456789"
        }
    },
    "error": null
}
       */
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
          "Account Signup": response,
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
