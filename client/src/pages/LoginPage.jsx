import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // true = login view, false = sign up view
  const [isLoginView, setIsLoginView] = useState(true);

  // Sync view with URL on mount or when pathname changes
  useEffect(() => {
    setIsLoginView(location.pathname.includes('signup') ? false : true);
  }, [location.pathname]);

  // Toggle view and update URL
  const toggleView = () => {
    setIsLoginView(!isLoginView);
    navigate(isLoginView ? '/auth/signup' : '/auth/login');
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log('Login logic here');
    } else {
      console.log('Sign up logic here');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-4xl flex flex-col md:flex-row">



          {/* Left Column: Login / Sign Up Form */}
          <div className="flex-1 pr-6 md:pr-10 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              {isLoginView ? 'Welcome Back' : 'Join Split-It'}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Username field only for Sign Up */}
              {!isLoginView && (
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />

              <input
                type="password"
                placeholder="Password"
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                {isLoginView ? 'Login' : 'Sign Up'}
              </button>
            </form>

            {/* Forgot password link only for Login */}
            {isLoginView && (
              <div className="text-center text-sm text-gray-500 mt-2">
                <a href="#" className="hover:text-blue-500 transition">
                  Forgot Password?
                </a>
              </div>
            )}
          </div>

          {/* Right Column: OAuth & Switch View */}
          <div className="flex-1 pl-6 md:pl-10 flex flex-col justify-center items-center md:items-start gap-4 border-l border-gray-200">
            {/* OAuth buttons */}
            <div className="flex flex-col gap-3 w-full">
              <button className="flex items-center justify-center border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full">
                <FcGoogle className="mr-2 text-xl" />
                Continue with Google
              </button>
            </div>

            {/* Switch view button */}
            <div className="mt-6 w-full">
              <button
                onClick={toggleView}
                className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                {isLoginView ? 'Switch to Sign Up' : 'Switch to Login'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
