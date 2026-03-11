"use client";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import { Box, Space, Text } from "@mantine/core";
import { useState } from "react";
import { isEmail, useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { BadInputError, NotFoundError } from "@/src/app/common";
import { ResponseData } from "./response-data.type";
import { formatJoiFormErrors } from "@/src/app/helpers/formatJoiFormErrors";

import Form from "./Form";
import { createAuthService } from "@/src/app/services/auth.service";
const _authSvc = createAuthService();


export type FormValues = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  confirm_password: string;
};


export default function SignUp() {
  const [isActivationRequestSent, setIsActivationRequestSent] = useState(false);

  console.log({ isActivationRequestSent });

  const [responseData, setResponseData] = useState<ResponseData>(
    /**
     * {
    success: true,
    message:
      "Registration successful. Please check your email to activate your account.",
    data: {
      userId: 3,
    },
    error: null,
  }
     */
  );

  const [errorFields, setErrorFields] = useState<string[]>([]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      phone: "",
      confirm_password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: (value: string): string | null =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
      fullName: (value: string): string | null =>
        value.length >= 2 ? null : "Full name must be at least 2 characters",
      phone: (value: string): string | null =>
        value.length >= 10
          ? null
          : "Phone number must be at least 10 characters",
      confirm_password: (value: string): string | null =>
        value === form.values.password ? null : "Passwords must match",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    const payload = {
      email: values.email,
      password: values.password,
      fullName: values.fullName,
      phone: values.phone,

      /**
       * 
    {
    "email": "ibrahim.alli+01@mysourcebank.com",
    "password": "MyPassword01@",
    "fullName": "Die John",
    "phone": "07065569711"
}
       */
    };
    console.log({ payload });

    try {
      const response = (await _authSvc.signUp(payload)) as ResponseData;
      setResponseData(response);

      /**
       * 
       * Response: {
    "success": true,
    "message": "Registration successful. Please check your email to activate your account.",
    "data": {
        "userId": 3
    },
    "error": null
}
       */
      console.log({ response });
      toast.success(response.message || "Sign up successful");
      form.reset();
      setIsActivationRequestSent(true);
    } catch (error: unknown) {
      console.log({ error });
      let message = "Sign up failed";
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
        // message = error.message;
        console.warn("Not found error");
      }
      if (error instanceof BadInputError) {
        console.warn("Bad input error");
        const formErrorFields = formatJoiFormErrors(response.data.error);
        console.log({ formErrorFields });
        setErrorFields(formErrorFields);
        toast.error(response.data.message);
      }
    }
  };

  return (
    <>
      <Space h={50} />
      <AuthCard
        title="Create an account"
        tagline={
          !isActivationRequestSent && (
            <>
              Already have an account? <Link href="/auth/login">Log in</Link>
            </>
          )
        }
      >
        <div className="mt-6"></div>

        {isActivationRequestSent && responseData?.success ? (
          <Box>
            <Text fz={14} c={"#6B7280"} mb={20}>
              {/* Your account has been created. Please check your email and click
              the activation link to verify and activate your account. */}
              {
                responseData?.message
              }
            </Text>

            <Text fz={14} c={"#6B7280"}>
              If you don’t see the email, check your spam or junk folder.
            </Text>
          </Box>
        ) : (
          <Form
            setIsActivationRequestSent={setIsActivationRequestSent}
            errorFields={errorFields}
            handleSubmit={handleSubmit}
            form={form}
          />
        )}
      </AuthCard>
      <Space h={50} />
    </>
  );
}
