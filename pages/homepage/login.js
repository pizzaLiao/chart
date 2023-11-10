import React from "react";
import Sign from "@/components/auth/sign";
import { useUser } from "@/context/userContext";

export default function LoginPage() {
  return (
    <div>
      <Sign />
    </div>
  );
}
