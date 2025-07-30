// components/LoginForm.jsx
import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Add this import

export default function LoginForm() {
  return (
    <div className="w-full max-w-[450px]">
      <h2 className="text-2xl font-bold mb-2">Welcome Back 👋</h2>
      <p className="text-gray-600 mb-6">
        Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
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
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="at least 8 characters"
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="text-right mt-1">
            {/* Link here */}
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white rounded-md">
          Sign in
        </button>
      </form>

      <div className="my-4 flex items-center gap-4">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 text-sm">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-3">
        <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2">
          <FaGoogle /> Sign in with Google
        </button>
        <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2">
          <FaFacebookF /> Sign in with Facebook
        </button>
      </div>

      <p className="text-sm text-center mt-4">
        Don’t you have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
