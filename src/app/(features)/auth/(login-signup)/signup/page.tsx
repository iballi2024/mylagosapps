"use client";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import { Box, Space, Text } from "@mantine/core";
import { useState } from "react";
import Form from "./Form";
export default function SignUp() {
  const [isActivationRequestSent, setIsActivationRequestSent] = useState(false);

  console.log({ isActivationRequestSent });

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

        {isActivationRequestSent ? (
          <Box>
            <Text fz={14} c={"#6B7280"} mb={20}>
              Your account has been created. Please check your email and click
              the activation link to verify and activate your account.
            </Text>

            <Text fz={14} c={"#6B7280"}>
              If you don’t see the email, check your spam or junk folder.
            </Text>
          </Box>
        ) : (
          <Form setIsActivationRequestSent={setIsActivationRequestSent} />
        )}
      </AuthCard>
      <Space h={50} />
    </>
  );
}
