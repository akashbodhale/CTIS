'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const router = useRouter();

  // Email format validator
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSignup = async () => {
    setErrorMsg(""); // Reset error

    if (!isValidEmail(user.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (usernameError) {
      setErrorMsg("Username must be lowercase.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`https://ctis-dged.vercel.app/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMsg(errorData.message || "User already exists.");
        return;
      }

      router.push('/login');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Signup error:', error.message);
        setErrorMsg("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { email, password, username } = user;
    if (
      email &&
      password &&
      username &&
      isValidEmail(email) &&
      !usernameError
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user, usernameError]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          {errorMsg && (
            <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
              {errorMsg}
            </div>
          )}

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {loading ? "Loading..." : "Sign Up"}
          </h1>

          <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            placeholder="Enter your username"
            onChange={(e) => {
              const value = e.target.value;
              if (/[A-Z]/.test(value)) {
                setUsernameError("Please use lowercase letters only.");
              } else {
                setUsernameError("");
              }
              setUser({ ...user, username: value });
            }}
            className="w-full px-4 py-2 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {usernameError && (
            <p className="text-red-500 text-sm mb-2">{usernameError}</p>
          )}

          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className={`w-full py-2 rounded text-white transition duration-200 ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={onSignup}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Fill all fields" : "Create Account"}
          </button>

          <p className="text-sm text-center mt-4">
            Have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 hidden md:block">
        <img
          src="../../main_log.png"
          alt="Sign Up Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
