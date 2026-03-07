import React from "react";
import AuthCard from "../components/AuthCard";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <AuthCard title="Login"
      tagline={<>Don&lsquo;t have an account? <Link href="/auth/signup">Sign up</Link></>}>
        Login
      </AuthCard>
    </>
  );
}
