'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? 'login' : 'signup'}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-xl w-full max-w-md overflow-hidden"
        >
          {/* Header */}
          <div className="text-center py-5 bg-purple-500 text-white">
            <h2 className="text-2xl font-bold">
              {isLogin ? 'Login to MoodCanvas' : 'Create Your MoodCanvas Account'}
            </h2>
          </div>

          {/* Form */}
          <div className="p-6">
            <form className="space-y-4">
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

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

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

              <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
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
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
