"use client";
import SignInpage from "../../components/SignInpage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
const SignIn = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  if (status === "loading" || status === "authenticated") {
    router.push("/");
    return;
  }
  return (
    status === "unauthenticated" && (
      <div>
        <SignInpage />
      </div>
    )
  );
};

export default SignIn;
