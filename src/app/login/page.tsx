"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import Image from "next/image";
import TestimonialPanel from "../components/testimonialsPanel";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "test@visionexdigital.com.au" && password === "password123") {
      login();
      toast.success("Login successful!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className='h-screen w-screen bg-gray-100 overflow-hidden'>
      {/* Mobile View: Only Left Section, Centered */}
      <div className='lg:hidden flex items-center justify-center h-full px-4'>
        <div className='bg-black text-white p-8 rounded-xl w-full max-w-sm'>
          <div className='flex items-center mb-6'>
            <Image src='/assets/images/logo.png' alt='Logo' width={24} height={24} />
            <span className='font-bold text-sm ml-2'>ROOM.ME</span>
          </div>
          <h1 className='text-xl font-bold mb-2'>Welcome back to Room.me!</h1>
          <p className='mb-4 text-xs text-gray-300'>Room.me is an innovative video conference product that revolutionizes virtual meetings.</p>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
            <div>
              <label className='text-sm mb-1 block'>Email address</label>
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full text-xs h-9 py-2 px-4 rounded-sm bg-gray-900 text-white border border-gray-600'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='text-sm mb-1 block'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                className='w-full text-xs h-9 py-2 px-4 rounded-sm bg-gray-900 text-white border border-gray-600'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='bg-gradient-to-r text-sm h-9 from-purple-500 to-indigo-500 py-2 rounded font-semibold'>
              Sign in
            </button>
            <button type='button' className='bg-white text-black py-2 rounded flex h-9 items-center text-xs justify-center gap-2'>
              <Image src='/assets/images/google.png' alt='Google' width={20} height={20} />
              Sign in with Google
            </button>
          </form>

          <div className='flex justify-between items-center mt-4 text-xs'>
            <label className='flex items-center space-x-1'>
              <input type='checkbox' className='accent-purple-500' />
              <span>Remember for 30 days</span>
            </label>
            <a href='#' className='text-purple-400 hover:underline'>
              Forgot password
            </a>
          </div>

          <p className='text-sm mt-6 text-center'>
            Don’t have an account?{" "}
            <a href='#' className='text-purple-400 hover:underline'>
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Desktop View: Left + Right */}
      <div className='hidden lg:flex items-center justify-center h-full px-4'>
        <div className='flex w-full max-w-3xl h-[90%] shadow-lg bg-black rounded-xl overflow-hidden'>
          {/* Left */}
          <div className='w-1/2 text-white p-10 flex flex-col justify-between'>
            {/* Reuse same left content */}
            <div>
              <div className='flex items-center mb-10'>
                <Image src='/assets/images/logo.png' alt='Logo' width={24} height={24} />
                <span className='font-bold text-sm ml-2'>ROOM.ME</span>
              </div>
              <h1 className='text-xl font-bold mb-2'>Welcome back to Room.me!</h1>
              <p className='mb-6 text-xs text-gray-300'>Room.me is an innovative video conference product that revolutionizes virtual meetings.</p>
              <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <div>
                  <label className='text-sm mb-1 block'>Email address</label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full text-xs h-9 py-2 px-4 rounded-md bg-gray-900 text-white border border-gray-600'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className='text-sm mb-1 block'>Password</label>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    className='w-full text-xs h-9 py-2 px-4 rounded-md bg-gray-900 text-white border border-gray-600'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 text-sm h-9 py-2 px-4 rounded-md font-semibold shadow-md hover:shadow-lg'>
                  Sign in
                </button>

                <button
                  type='button'
                  className='bg-white text-black hover:bg-gray-200 transition-all duration-200 py-2 px-4 rounded-md flex h-9 items-center text-xs justify-center gap-2 shadow-sm hover:shadow-md'>
                  <Image src='/assets/images/google.png' alt='Google' width={20} height={20} />
                  Sign in with Google
                </button>
              </form>

              <div className='flex justify-between items-center mt-4 text-xs'>
                <label className='flex items-center space-x-1'>
                  <input type='checkbox' className='accent-purple-500' />
                  <span>Remember for 30 days</span>
                </label>
                <a href='#' className='text-purple-400 hover:underline'>
                  Forgot password
                </a>
              </div>

              <p className='text-sm mt-6 text-center'>
                Don’t have an account?{" "}
                <a onClick={() => router.push("/register")} href='#' className='text-purple-400 hover:underline'>
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className='w-1/2 h-full relative py-4 pr-4'>
            <TestimonialPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
