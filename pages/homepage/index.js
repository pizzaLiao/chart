import React from "react";
// import Sign from "@/components/auth/sign";
import UserDetail from "@/components/auth/user-detail";
import { useUser } from "@/context/userContext";

export default function HomepageIndex() {
  const { user, setUser } = useUser();

  return (
    <div>
      <UserDetail />
    </div>
  );
}
