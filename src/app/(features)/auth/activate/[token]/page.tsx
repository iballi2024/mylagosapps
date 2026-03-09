"use client";
import { createAuthService } from "@/src/app/services/auth.service";
import { Button, Card, Loader, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Activation = {
  SUCCESSFUL: "SUCCESSFUL",
  FAILURE: "FAILURE",
} as const;

const _authSvc = createAuthService();

export default function ActivateAccount() {
  /**React Hooks */
  const params = useParams();
  const { token } = params as { token: string };
  console.log({ token });

  /**Local states */
  const [isActivating, setIsActivating] = useState(false);
  const [activationStatus, setActivationStatus] = useState<
    (typeof Activation)[keyof typeof Activation] | null
  >(null);

  useEffect(() => {
    const handleAccountActivation = async () => {
      setIsActivating(true);
      try {
        // const response = await fetch(`/api/auth/activate/${token}`, {
        //   method: "POST",
        // });
        const response = await _authSvc.activateAccount(token);
        console.log({ response });
        toast.success("Account activated successfully");
        setActivationStatus(Activation.SUCCESSFUL);
      } catch (error) {
        console.error("An error occurred during account activation", error);
        // console.error("Failed to activate account");
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
        {!isActivating ? (
          <>
            <Card
              shadow="sm"
              padding="xl"
              radius="lg"
              withBorder
              className="w-full max-w-md"
            >
              {
                activationStatus === Activation.SUCCESSFUL ? (
                  <>
                    <Title ta={"center"} fz={30} mb={5}>
                      Account Activated!
                    </Title>
                    <Text ta={"center"} mb={20}>
                      Your account has been successfully activated. You can now
                      log in and start using our services.
                    </Text>
                    <Button component={Link} href={"/auth/login"} size="lg">
                      Go to Login
                    </Button>
                  </>
                ) : (
                  <>Failed to activate</>
                )

                //   (
                // <Title ta={"center"} fz={30} mb={5}>
                //   Account Activated!
                // </Title>
                // <Text ta={"center"} mb={20}>
                //   Your account has been successfully activated. You can now log in
                //   and start using our services.
                // </Text>
                // <Button component={Link} href={"/auth/login"} size="lg">
                //   Go to Login
                // </Button>) : (<></>)
              }
            </Card>
          </>
        ) : (
          <Loader size="xl" variant="dots" />
        )}
      </div>
    </>
  );
}
