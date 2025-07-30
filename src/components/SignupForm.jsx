// components/SignupForm.jsx
import React from "react";

export default function SignupForm() {
  return (
    <div className="w-full max-w-[450px]">
      <h2 className="text-2xl font-bold mb-2">Create Account 🚀</h2>
      <p className="text-gray-600 mb-6">Let's get you started with your new account.</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input type="text" placeholder="Your name" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" placeholder="At least 8 characters" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white rounded-md">
          Sign up
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account? <a href="/login" className="text-blue-600">Sign in</a>
      </p>
    </div>
  );
}
