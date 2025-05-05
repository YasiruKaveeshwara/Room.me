"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/authStore"; // adjust path if needed

export default function Home() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [isAuthenticated]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-gray-500">Redirecting...</p>
    </main>
  );
}
