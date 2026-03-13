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
      <div className="pt-20">UserAccount</div>
    </>
  );
}
