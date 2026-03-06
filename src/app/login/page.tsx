"use client";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../_Firebase/client";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function page() {
  const [email, setEmail] = React.useState("armarinho@email.com");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password.length < 6 || !emailRegex.test(email)) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    try {
      // Login Firebase
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const idToken = await credential.user.getIdToken();

      // Envia para o servidor criar session cookie
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to create session");
      }

      router.replace("/");
    } catch (err) {
      setLoading(false);
      setError("Invalid email or password");
    }
  }

  return (
    <section className="grid place-items-center h-screen px-10">
      <form
        onSubmit={handleLogin}
        className="bg-white text-black p-5 rounded-md w-full max-w-xl"
      >
        <span className="block w-fit mx-auto mb-5">
          <FaUserAlt size={45} />
        </span>

        <div className="mb-5">
          <label htmlFor="email" className="block">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            placeholder="email@email.com"
            className="border rounded-md p-2 w-full"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block">
            Password
          </label>
          <span className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              placeholder="123"
              className="border rounded-md p-2 w-full"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {showPassword ? (
              <FaEyeSlash
                className="absolute inset-y-0 right-2 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="absolute inset-y-0 right-2 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </span>
        </div>

        <p className="text-red-600 mb-2">{error}</p>

        <button
          className={`p-2 rounded-md w-full mb-2 mt-5 h-10 ${loading ? "bg-gray-300 text-black" : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"}`}
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="mx-auto animate-spin" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </section>
  );
}

export default page;
