// app/about/page.jsx

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SparklesIcon, PhotoIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-7 pb-12">
      
      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 
            bg-[200%_auto] bg-clip-text leading-tight text-transparent"
            data-aos="fade-down"
                data-aos-delay="300">
          <span className='text-black'>About</span> MoodCanvas
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto"
        data-aos="zoom-out"
                data-aos-delay="300">
          Where emotions meet AI art — transforming how you feel into stunning wallpapers every day.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center mb-15">
        <Image
          src="/flower.jpg" // Replace with your image in public/
          alt="Mood-based wallpaper"
          width={550}
          height={350}
          className="rounded-xl shadow-md"
          data-aos="fade-right"
                data-aos-delay="400"
        />
        <div
        data-aos="fade-left"
                data-aos-delay="400">
          <h2 className="text-3xl font-semibold mb-2">Visualize Your Feelings</h2>
          <p className="text-gray-600 text-xl">
            Just describe your mood — our AI blends quotes, creativity, and color to craft a wallpaper that's uniquely you.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
        <FeatureCard
        icon={<SparklesIcon className="h-8 w-8 text-purple-500" />} title="AI-Powered Imagery" text="Wallpapers generated using DALL·E or Stability AI." />
        <FeatureCard icon={<ChatBubbleLeftRightIcon className="h-8 w-8 text-pink-500" />} title="Emotion Quotes" text="Poetic, motivational quotes based on your mood." />
        <FeatureCard icon={<PhotoIcon className="h-8 w-8 text-indigo-500" />} title="Mood Gallery" text="View all your past moods in one place." />
      </section>

      <section className="text-center mb-15">
        <h3 className="text-2xl font-semibold mb-4"
        data-aos="fade-up"
                >Built With</h3>
        <div className="flex justify-center gap-6 text-gray-700 text-lg font-medium flex-wrap">
          <span data-aos="fade-up"
                data-aos-delay="50">Next.js</span>
          <span data-aos="fade-up"
                data-aos-delay="100">React</span>
          <span data-aos="fade-up"
                data-aos-delay="150">Tailwind CSS</span>
          <span data-aos="fade-up"
                data-aos-delay="200">MongoDB</span>
          <span data-aos="fade-up"
                data-aos-delay="250">OpenAI API</span>
          <span data-aos="fade-up"
                data-aos-delay="300">Cloudinary</span>
        </div>
      </section>

      <section className="text-center mb-10">
        <h3 className="text-2xl font-semibold mb-4"
        data-aos="fade-right"
                data-aos-delay="400">Ready to turn feelings into art?</h3>
        <div className="flex justify-center gap-4">
          <Link href="/shorten">
            <button data-aos="fade-up"
                data-aos-delay="200" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 flex items-center gap-2">
              <SparklesIcon className="w-5 h-5" />
              Try MoodCanvas
            </button>
          </Link>
          <Link href="https://github.com/AletiAnudeepReddy" target="_blank">
            <button data-aos="fade-up"
                data-aos-delay="300" className="border border-purple-500 text-purple-600 px-6 py-2 rounded-full bg-white flex items-center gap-2 hover:bg-purple-100">
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white flex flex-col items-center text-center"
    data-aos="zoom-in"
    >
      <div className="mb-3"
      data-aos="fade-right"
                data-aos-delay="100">{icon}</div>
      <h4 className="font-bold text-xl mb-1"
      data-aos="fade-left"
                data-aos-delay="200">{title}</h4>
      <p className="text-gray-500 text-md"
      data-aos="fade-right"
                data-aos-delay="300">{text}</p>
    </div>
  )
}
