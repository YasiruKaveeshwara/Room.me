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
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='bg-white shadow-md rounded-xl p-10 max-w-md w-full text-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>🎉 Welcome to your Dashboard</h1>
        <p className='text-sm text-gray-600 mb-6'>You are successfully logged in. Explore your features or manage your account below.</p>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className='bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-200'>
          Logout
        </button>
      </div>
    </div>
  );
}
