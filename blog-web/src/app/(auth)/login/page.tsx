"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";


export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) return toast.error("All fields are required!");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.message) {
        toast.error(data.message);
      }

      toast.success("Login successful!", {
        duration: 2000,
        onAutoClose: () => {
          router.push("/");
        },
      });
    } catch (error) {
      console.error("Error:", (error as Error).message);
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#141414] text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] p-8 rounded shadow-md w-full space-y-6 max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-[#807f7f]">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
