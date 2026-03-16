"use client";
import { BadInputError } from "@/src/app/common/bad-input-error";
import { NotFoundError } from "@/src/app/common/not-found-error";
import { formatJoiFormErrors } from "@/src/app/helpers/formatJoiFormErrors";
import { log } from "@/src/app/helpers/logInConsole";
import { OriginalError } from "@/src/app/models/types/server-error";
import { createAuthService } from "@/src/app/services/auth.service";
import PageResponseCard from "@/src/app/shared/components/PageResponseCard";
import { Button, Card, Loader, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Activation = {
  SUCCESSFUL: "SUCCESSFUL",
  FAILURE: "FAILURE",
} as const;

const _authSvc = createAuthService();

export default function Content() {
  /**React Hooks */
  // const params = useParams();
  // const { token } = params as { token: string };
  // console.log({ token });

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  /**Local states */
  const [isActivating, setIsActivating] = useState(false);
  const [activationStatus, setActivationStatus] = useState<
    (typeof Activation)[keyof typeof Activation] | null
  >(null);
  const [activationResponseMessage, setActivationResponseMessage] =
    useState<string>("");

  useEffect(() => {
    const handleAccountActivation = async () => {
      setIsActivating(true);
      try {
        const response = await _authSvc.activateAccount(token as string);
        console.log({ response });
        setActivationResponseMessage(
          response.message || "Account activated successfully",
        );
        toast.success(
          response.message ||
            "Your account has been activated. You can now log in.",
        );
        setActivationStatus(Activation.SUCCESSFUL);
      } catch (error) {
        let message = "Failed to activate account!";
        log({ "An error occurred during account activation": error });

        const response = (error as OriginalError)?.originalError;

        if (error instanceof NotFoundError) {
          log({
            "Activation request not found": response,
          });
          message = response?.message || "Request not found";
        }
        if (error instanceof BadInputError) {
          log({
            "Activation Validation error": response,
          });
          message = response?.message || "Invalid or expired activation token";
        }

        toast.error(message);
        setActivationResponseMessage(
          message || "Your activation request failed. Please try again.",
        );
        setActivationStatus(Activation.FAILURE);
      } finally {
        setIsActivating(false);
      }
    };

    if (token) {
      handleAccountActivation();
    }
  }, [token]);

  return (
    <>
      <div className="flex items-center justify-center h-screen p-2">
        {isActivating ? (
          <Loader size="xl" variant="dots" color="#0FA958" />
        ) : (
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            withBorder
            className="w-full max-w-md"
          >
            {activationStatus === Activation.SUCCESSFUL ? (
              <>
                <PageResponseCard
                  title="Account Activated!"
                  message={
                    <>
                      <Text mb={10}>{activationResponseMessage}</Text>
                    </>
                  }
                  messageType="SUCCESS"
                  isCTA={true}
                  ctaUrl={"/auth/login"}
                  isCtaIcon={false}
                  ctaTitle="Login to continue"
                />
              </>
            ) : (
              <>
                <PageResponseCard
                  title="Activation Failed!"
                  message={
                    <>
                      <Text mb={10}>{activationResponseMessage}</Text>
                    </>
                  }
                  messageType="FAILURE"
                  isCTA={true}
                  ctaUrl={"/auth/login"}
                  isCtaIcon={false}
                />
              </>
            )}
          </Card>
        )}
      </div>
    </>
  );
}
