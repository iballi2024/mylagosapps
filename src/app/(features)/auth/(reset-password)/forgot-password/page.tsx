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

const _authSvc = createAuthService();

export type FormValues = {
  email: string;
};

export default function ForgotPassword() {
  const [formFieldsErrors, setformFieldsErrors] = useState<string[]>([]);
  const [responseData, setResponseData] = useState<ResponseData>();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: isEmail("Invalid email"),
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
      const response = (await _authSvc.forgotPassword({
        email: values.email,
      })) as ResponseData;
      setResponseData(response);
      console.log({ response });
      toast.success(
        response.message ? response.message : "You are successfully logged in",
      );
      form.reset();
      setResponseData(response);
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
          "Forgot password request not found": response,
        });
        message = "Request not found";
      }
      if (error instanceof BadInputError) {
        log({
          "Forgot password Validation error": response,
        });
        const formformFieldsErrors = formatJoiFormErrors(response.data.error);
        setformFieldsErrors(formformFieldsErrors);
        message = response.data.message;
      }
      toast.error(message);
    }
  };

  return (
    <>
      <div className="flex flex-col  min-h-screen items-center justify-center p-2">
        <AuthCard
          title={!responseData?.message ? "Forgot password": "Request sent"}
          titleAlign={!responseData?.message ? "left" : "center"}
          tagline={
            !responseData?.message &&
            <>
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </>
          }
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
