"use client";
import { useState } from "react";
import AuthCard from "../../(login-signup)/components/AuthCard";
import Form from "./Form";
import { isEmail, useForm } from "@mantine/form";
import { createAuthService } from "@/src/app/services/auth.service";
import { BadInputError, NotFoundError } from "@/src/app/common";
import { formatJoiFormErrors } from "@/src/app/helpers/formatJoiFormErrors";
import { log } from "@/src/app/helpers/logInConsole";
import { toast } from "react-toastify";
import { Box, Text } from "@mantine/core";
import { ResponseData } from "../../(login-signup)/signup/response-data.type";
import { useRouter, useSearchParams } from "next/navigation";
import { OriginalError } from "@/src/app/models/types/server-error";

const _authSvc = createAuthService();

export type FormValues = {
  newPassword: string;
  confirm_password: string;
};

export default function ResetPassword() {
  /**React Hooks */
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useRouter();

  const [formFieldsErrors, setformFieldsErrors] = useState<string[]>([]);
  const [responseData, setResponseData] = useState<ResponseData>();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      newPassword: "",
      confirm_password: "",
    },

    validate: {
      newPassword: (value) => {
        if (!value) {
          return "Password is required";
        }
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        return null;
      },
      confirm_password: (value) => {
        if (form.values.newPassword !== form.values.confirm_password) {
          return "Passwords do not match";
        }
      },
    },
  });

  const resetformFieldsErrors = () => {
    if (formFieldsErrors.length > 0) {
      setformFieldsErrors([]);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    if (values.newPassword !== values.confirm_password) {
      setformFieldsErrors(["Passwords do not match"]);
      return;
    }
    resetformFieldsErrors();
    try {
      const response = (await _authSvc.resetPassword({
        newPassword: values.newPassword,
        token: token as string,
      })) as ResponseData;
      setResponseData(response);
      console.log({ response });
      toast.success(
        response.message ? response.message : "You are successfully logged in",
      );
      form.reset();
      setResponseData(response);
      navigate.push("/auth/login");
    } catch (error: unknown) {
      console.log({ error });
      /**
       *
       */
      let message = "Failed to create an account!";
      const { response } = (error as OriginalError)?.originalError;

      if (error instanceof NotFoundError) {
        log({
          "Reset password request not found": response,
        });
        message = "Request not found";
      }
      if (error instanceof BadInputError) {
        log({
          "Reset password Validation error": response,
        });
        if (response.data.error) {
          const formformFieldsErrors = formatJoiFormErrors(response.data.error);
          setformFieldsErrors(formformFieldsErrors);
        }
        message = response.data.message;
      }
      toast.error(message);
    }
  };

  return (
    <>
      <div className="flex flex-col  min-h-screen items-center justify-center p-2">
        <AuthCard
          title={!responseData?.message ? "Reset password" : "Request sent"}
          titleAlign={!responseData?.message ? "left" : "center"}
          tagline={!responseData?.message && <>Enter your new password</>}
          isBackHistory={!responseData?.message}
        >
          <div className="mt-6"></div>

          {responseData?.success ? (
            <Box>
              <Text fz={18} c={"#6B7280"} mb={20} ta={"center"}>
                {responseData?.message}
              </Text>
            </Box>
          ) : (
            <Form
              handleSubmit={handleSubmit}
              form={form}
              formFieldsErrors={formFieldsErrors}
            />
          )}
        </AuthCard>
      </div>
    </>
  );
}
