import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { MdWallpaper } from 'react-icons/md'
// Remix Icon
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='container mx-auto flex flex-row justify-between items-center h-30 p-10 px-20 border-b-2 border-purple-50'>
            <div className="logo flex items-center gap-3 p-2 rounded-xl bg-white/70 backdrop-blur-md transition duration-300 hover:scale-[1.02]">
                {/* Icon with subtle background glow */}
                <div className="p-2 bg-purple-100 rounded-full shadow-inner">
                    <MdWallpaper size={40} className="text-purple-700" />
                </div>

                {/* Brand Name with gradient, refined font, and spacing */}
                <Link href="/" className="hover:opacity-90 transition">
                    <h1 className="text-4xl font-bold font-serif tracking-wide bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                        MoodCanvas
                    </h1>
                </Link>
            </div>

            <div>
                <div className="flex p-2 items-center gap-4">
                    <HomeIcon className="hover:bg-purple-200 hover:rounded-full hover:p-1 w-8 h-8 text-purple-700" />


                    <PlayCircleIcon className="hover:bg-pink-200 hover:rounded-full hover:p-1 w-8 h-8 text-pink-700" />
                    <FaGithub className="hover:bg-gray-200 hover:rounded-full hover:p-1 w-8 h-8 text-gray-700" />
                    <ArrowRightOnRectangleIcon className="hover:bg-green-200 hover:rounded-full hover:p-1 w-8 h-8 text-green-700" />
                </div>
            </div>
        </div>
    )
}

export default Navbar