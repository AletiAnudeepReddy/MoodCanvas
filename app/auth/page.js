'use client'
import { useState } from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md overflow-hidden transition-all duration-500"
      data-aos="flip-left"
                data-aos-delay="200">
        {/* Header */}
        <div className="text-center py-5 bg-purple-500  text-white">
          <h2 className="text-2xl font-bold">{isLogin ? 'Login to MoodCanvas' : 'Create Your MoodCanvas Account'}</h2>
        </div>
        {/* Form Container */}
        <div className="p-6">
          <form className="space-y-4">
            {/* Signup-specific Field */}
            {!isLogin && (
              <div className="relative">
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            )}

            {/* Email */}
            <div className="relative"
            data-aos="fade-right"
                data-aos-delay="300">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Password */}
            <div className="relative"
            data-aos="fade-left"
                data-aos-delay="400">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Confirm Password for Signup */}
            {!isLogin && (
              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            )}

            {/* Submit Button */}
            <button data-aos="zoom-in"
                data-aos-delay="500" className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="mt-4 text-center text-sm text-gray-600"
          data-aos="fade-up"
                data-aos-delay="600">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-purple-600 font-semibold cursor-pointer hover:underline"
                >
                  Sign up here
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-purple-600 font-semibold cursor-pointer hover:underline"
                >
                  Log in here
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
