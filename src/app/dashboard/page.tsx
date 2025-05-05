"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";

export default function DashboardPage() {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <h1 className='text-2xl font-bold'>Welcome, you're logged in.</h1>
      <button
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className='mt-4 bg-red-500 text-white px-4 py-2 rounded'>
        Logout
      </button>
    </div>
  );
}
