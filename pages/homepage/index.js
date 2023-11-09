import React from "react";
import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import Sign from "@/components/auth/sign";
import UserDetail from "@/components/auth/user-detail";
import { useUser } from "@/context/userContext";

export default function HomepageIndex() {
  const { user, setUser } = useUser();

  return (
    <div>
      {/* <Login />
      <Signup /> */}
      <Sign />
      <UserDetail />
    </div>
  );
}
