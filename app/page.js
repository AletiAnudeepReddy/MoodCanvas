"use client"
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa'
import { PlayCircleIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        <div className="container mx-auto flex flex-col items-center justify-center mt-[25vh]">
          <div className="row1 h-8">
            <div className="relative p-0 inline-block group">
              {/* Rotating border layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-spin-slow opacity-35 blur-md"></div>

              <Link href={"/about"}>
              <div className="relative border border-purple-500 hover:border-2 hover:border-purple-400 inline-flex cursor-pointer justify-center rounded-full bg-white px-5 py-[6px] text-md font-medium
              text-slate-600 backdrop-blur-xl transition duration-300">
                New Moods ⚡️
                <span className="inline-flex items-center pl-2 text-md text-black">
                  Read more
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
              </Link>
            </div>

          </div>
          <div className="mx-[10vw] row2 p-10">
            <h2 className="text-center text-5xl font-medium text-gray-900 sm:text-7xl">Where feelings become
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 
            bg-[200%_auto] bg-clip-text leading-tight text-transparent ">visual stories</span>
            </h2>
            <p className="mx-[10vw] mt-6 text-center text-xl leading-6 text-gray-600">
              MoodCanvas transforms your daily emotions into stunning visual experiences. Simply share how you feel,
              and let AI craft a unique wallpaper that blends quotes and imagery.
            </p>
          </div>

          <div className="row-3 m-2">
            <div className="flex gap-4 items-center">

              {/* Try Now Button */}
              <Link href="/generate">
                <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-6 py-2 text-lg font-semibold shadow-md transition duration-200">
                  <PlayCircleIcon className="w-5 h-5" />
                  Try Now
                </button>
              </Link>

              {/* GitHub Button */}
              <Link href="https://github.com/AletiAnudeepReddy" target="_blank">
                <button className="flex items-center gap-2 bg-white border border-purple-400 hover:bg-purple-100 text-purple-700 rounded-lg px-6 py-2 text-lg font-semibold shadow-md transition duration-200">
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
