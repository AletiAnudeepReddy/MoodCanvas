'use client'
import { useState } from 'react'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { MdWallpaper } from 'react-icons/md'

export default function MoodCanvasMain() {
    const [moodInput, setMoodInput] = useState('')
    const [quote, setQuote] = useState('You are stronger than you think.and enough to make yourself happy')
    const [imageURL, setImageURL] = useState('/flower.jpg') // use placeholder first

    const handleGenerate = async () => {
        // Later: call your OpenAI/Stable Diffusion APIs here
        // For now, mock image + quote
        setQuote("Even the darkest night will end, and the sun will rise.")
        setImageURL('/flower.jpg') // Replace with real image later
    }

    return (
        <main className="min-h-[88vh] px-6 py-12">

            {/* Heading */}
            <div className="text-center mb-10"
            data-aos="fade-down"
                data-aos-delay="300">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent p-1 bg-clip-text">
                    Turn your emotions into visual poetry
                </h1>
            </div>

            {/* Mood Input */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="How are you feeling today?"
                    value={moodInput}
                    onChange={(e) => setMoodInput(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
                    data-aos="fade-right"
                data-aos-delay="400"
                />
                <button
                    onClick={handleGenerate}
                    className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition flex items-center font-semibold gap-2"
                    data-aos="fade-left"
                data-aos-delay="400"
                >
                    <SparklesIcon className="w-5 h-5" />
                    Generate
                </button>
            </div>

            {/* Wallpaper + Quote Display */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto mt-8 px-4"
            >

                {/* Laptop Frame with Image */}
                <div className="relative border-[12px] border-gray-700 rounded-2xl overflow-hidden shadow-lg w-[300px] md:w-[500px] h-auto"
                data-aos="fade-right"
                data-aos-delay="500">
                    <Image
                        src={imageURL}
                        alt="Generated Mood Wallpaper"
                        width={800}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700"></div>
                </div>

                <div>
                    {/* Quote Block */}
                    <div className="max-w-md bg-white shadow-xl rounded-2xl p-6 text-center border border-purple-100"
                    data-aos="fade-left"
                data-aos-delay="500">
                        <h2 className="text-xl font-semibold text-purple-700 mb-2">Your Mood Quote</h2>
                        <p className="text-gray-600 italic text-lg">“{quote}”</p>
                    </div>
                    <button
                        onClick={() => alert('Wallpaper set!')} // Replace with your real logic
                        className="bg-gradient-to-r mt-5 from-pink-600 via-purple-600 to-indigo-600 
             text-white px-6 py-2.5 m-3 rounded-full shadow-lg hover:scale-105 
             transition-all duration-300 flex items-center gap-3 font-semibold"
             data-aos="fade-up"
                data-aos-delay="600"
                    >
                        <MdWallpaper className="w-6 h-6" />
                        Set as Wallpaper
                    </button>
                </div>
            </div>
        </main>
    )
}
