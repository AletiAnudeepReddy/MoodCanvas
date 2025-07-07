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
        <div className='container mx-auto flex flex-row justify-between items-center h-30 p-10 px-20'>
            <div className='logo flex flex-row items-center gap-3'>
                <MdWallpaper size={42} color="#ec4899"/>
                <Link href={"/"}><h1 className="text-4xl font-serif tracking-wide font-bold bg-gradient-to-r from-indigo-500 via-pink-600 to-purple-500 text-transparent bg-clip-text">
                    MoodCanvas
                </h1></Link>
            </div>
            <div>
                <div className="flex p-2 items-center gap-4">
                    <HomeIcon className="hover:w-9 hover:h-9 w-8 h-8 text-black" />
                    
                    
                    <PlayCircleIcon className="hover:w-9 hover:h-9 w-8 h-8 text-black" />
                    <FaGithub className="hover:w-9 hover:h-9 w-8 h-8 text-gray-800" />
                    <ArrowRightOnRectangleIcon className="hover:w-9 hover:h-9 w-8 h-8 text-black" />
                </div>
            </div>
        </div>
    )
}

export default Navbar