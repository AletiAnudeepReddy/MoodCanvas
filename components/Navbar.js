"use client"
import React, { useEffect, useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { MdWallpaper } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

// Remix Icon
import Link from 'next/link'

const Navbar = () => {
    const [userEmail, setUserEmail] = useState('')
    const [username, setUsername] = useState('')
  const router = useRouter()
  

    useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail')
    if (storedEmail) {
      setUserEmail(storedEmail)
      const extractedUsername = storedEmail.split('@')[0]
      setUsername(extractedUsername)
    }
  }, [])
    const handleLogout = () => {
    localStorage.removeItem('userEmail')
    localStorage.removeItem('username')
    router.push('/auth')
  }
    return (
        <div className='container mx-auto flex flex-row justify-between items-center h-24 pb-5 pt-6 px-20 border-b-2 border-purple-50'
         data-aos="fade-down"
         >
            <div className="logo flex items-center gap-2 p-2 rounded-xl bg-white/70 backdrop-blur-md transition duration-300 hover:scale-[1.02]"
            >
                {/* Icon with subtle background glow */}
                <div className="p-2 rounded-full"
                data-aos="zoom-in"
            data-aos-delay="300">
                    <MdWallpaper size={40} className="text-purple-700" />
                </div>

                {/* Brand Name with gradient, refined font, and spacing */}
                <Link href="/" className="hover:opacity-90 transition"
                data-aos="zoom-out"
            data-aos-delay="300">
                    <h1 className="text-4xl font-bold font-serif tracking-wide bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                        MoodCanvas
                    </h1>
                </Link>
            </div>

            <div>
                <div className="flex p-2 items-center gap-4"
                 >{userEmail ? (<>
          <Link href={`/${username}`}>
            <button className="flex items-center gap-2 bg-gradient-to-r cursor-pointer from-pink-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                <FaUserCircle className="w-5 h-5" />
              {username}
            </button>
          </Link>
          <button
              onClick={handleLogout}
              title="Logout"
              className="hover:bg-red-100 p-1.5 rounded-full"
            >
              <FiLogOut className="w-6 h-6 hover:p-1 text-red-600" />
            </button>
          </>
          
        ) : (<>
                    <Link data-aos="fade-left"
                data-aos-delay="300" href={"/"}><HomeIcon className="hover:bg-purple-200 hover:rounded-full hover:p-1 w-8 h-8 text-purple-700" /></Link>
                    <Link data-aos="fade-left"
                data-aos-delay="400" href={"/auth"}><PlayCircleIcon className="hover:bg-pink-200 hover:rounded-full hover:p-1 w-8 h-8 text-pink-700" /></Link>
                    <Link data-aos="fade-left"
                data-aos-delay="500" href="https://github.com/AletiAnudeepReddy" target="_blank"><FaGithub className="hover:bg-gray-200 hover:rounded-full hover:p-1 w-8 h-8 text-gray-700" /></Link>
                    <Link data-aos="fade-left"
                data-aos-delay="600" href={"/auth"}><ArrowRightOnRectangleIcon className="hover:bg-green-200 hover:rounded-full hover:p-1 w-8 h-8 text-green-700" /></Link>
                </>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar