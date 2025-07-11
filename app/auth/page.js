'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || (!isLogin && (!fullname || password !== confirmPassword))) {
      setMessage('Please fill all fields correctly.')
      return
    }

    const endpoint = isLogin ? '/api/login' : '/api/signup'
    const payload = isLogin
      ? { email, password }
      : { fullname, email, password }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Something went wrong')

      setMessage(data.message || `${isLogin ? 'Logged in' : 'Signed up'} successfully!`)
      // Optionally redirect or store token/session
    } catch (err) {
      setMessage(err.message)
    }
  }

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
          <div className="text-center py-5 bg-purple-500 text-white">
            <h2 className="text-2xl font-bold">
              {isLogin ? 'Login to MoodCanvas' : 'Create Your MoodCanvas Account'}
            </h2>
          </div>

          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="relative">
                  <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              )}

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            {message && (
              <p className="mt-3 text-center text-sm text-red-500">{message}</p>
            )}

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
