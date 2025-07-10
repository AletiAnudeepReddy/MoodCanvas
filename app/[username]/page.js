import Image from 'next/image'

export default function Page({ params }) {
  const username = params.username;

  // 🧪 Mock entries – Replace with MongoDB later
  const moodEntries = [
    {
      image: '/flower.jpg',
      quote: 'Even the darkest night will end and the sun will rise.',
      datetime: '2025-07-06 10:24 AM',
    },
    {
      image: '/gb.jpg',
      quote: 'Be gentle with yourself, you’re doing the best you can.',
      datetime: '2025-07-05 8:52 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-purple-300 py-10 px-4">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <img width={150} height={150} className="rounded-full shadow-lg" src="/keerthy.jpg" alt="Profile" />
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 text-transparent bg-clip-text">@{username}</span>
        <p className="text-center max-w-md text-gray-800">A journey through your emotions, painted one day at a time.</p>
      </div>

      {/* Mood Entries */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {moodEntries.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-purple-200"
          >
            {/* Wallpaper Image */}
            <div className="w-full md:w-1/2 h-64 relative">
              <Image
                src={entry.image}
                alt={`Wallpaper ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Quote + Date/Time */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
              <p className="text-lg italic text-purple-800 mb-2">“{entry.quote}”</p>
              <p className="text-sm text-gray-500">{entry.datetime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
