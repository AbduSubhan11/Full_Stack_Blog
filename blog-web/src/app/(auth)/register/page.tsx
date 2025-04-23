"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (data.message) {
        setError(data.message);
      }
      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#141414] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] p-8 rounded shadow-md w-full space-y-6 max-w-lg"
      >
        <p className="text-center text-red-500 ">{error}</p>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="name"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={formData.name}
          onChange={handleChange}
          required
        />

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
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#141414] font-semibold p-2 rounded"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4 text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
