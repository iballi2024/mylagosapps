"use client";
import { useEffect } from "react";
import { createUserService } from "../../services/user.service";

const _userSvc = createUserService();
export default function UserAccount() {
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await _userSvc.getCurrentUser();
        console.log({ currentUser });
      } catch (error: unknown) {
        console.log({ error });
      }
    };
    fetchCurrentUser();
  }, []);
  return (
    <>
      <div className="pt-20">
        <div className="main-wrapper">
          <h1 className="text-lg font-bold mt-10">Welcome to your account</h1>
          <p>Here you can manage your account settings.</p>
        </div>
      </div>
    </>
  );
}
