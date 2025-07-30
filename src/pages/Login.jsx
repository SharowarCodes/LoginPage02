// pages/Login.jsx
import React from "react";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
