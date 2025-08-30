import React from 'react';
import Navbar from '../components/navbar';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
          
          <form className="flex flex-col space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            
            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center text-sm text-gray-500">
              <a href="#" className="hover:text-blue-500 transition">Forgot Password?</a>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* OAuth Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              className="flex items-center justify-center border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <FcGoogle className="mr-2 text-xl" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign Up Button */}
          <button
            className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
