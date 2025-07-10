import Link from "next/link"

export default function Page({ params }) {
  const username = params.username;

  return (
    <div className="flex min-h-screen justify-center items-start py-10">
      <div className="photo flex justify-center flex-col items-center gap-4">
        <img width={150} height={150} className="rounded-full" src="/keerthy.jpg" alt="Profile Logo" />

        {/* Username dynamically shown */}
        <span className="font-bold text-xl">@{username}</span>
      </div>
    </div>
  );
}
