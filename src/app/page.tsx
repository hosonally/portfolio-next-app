"use client"
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Unable to find your path to the success.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Fetch Message
      </button>
      <div className="mt-4 text-lg">{message}</div>
    </main>
  );
}
