"use client";
import SignInpage from "../../components/SignInpage";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
const SignIn = () => {
  const { status, data: session } = useSession();
  if (session?.user?.image) {
    redirect("/");
  }
  return <div>{!session?.user?.image && <SignInpage />}</div>;
};

export default SignIn;
