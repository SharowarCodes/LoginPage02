// pages/Signup.jsx
import React from "react";
import AuthLayout from "../components/AuthLayout";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
