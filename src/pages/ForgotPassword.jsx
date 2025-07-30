// src/pages/ForgotPassword.jsx
import React from "react";
import AuthLayout from "../components/AuthLayout";
import Container from "../components/Container";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Container>
        <div className="w-full max-w-[450px]">
          <h2 className="text-2xl font-bold mb-2">Forgot Password 🔐</h2>
          <p className="text-gray-600 mb-6">
            Enter your email and we’ll send you a link to reset your password.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Back to{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </Container>
    </AuthLayout>
  );
}
