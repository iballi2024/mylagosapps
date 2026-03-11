import AuthCard from "../../(login-signup)/components/AuthCard";

export default function ResetPassword() {
  return (
    <>
      <div className="flex flex-col  min-h-screen items-center justify-center">
        <AuthCard
          title="Reset password"
          tagline={
            <>
              {/* Don&lsquo;t have an account?{" "}
            <Link href="/auth/signup">Sign up</Link> */}
            </>
          }
        >
          <div className="mt-6"></div>
        </AuthCard>
      </div>
    </>
  );
}
