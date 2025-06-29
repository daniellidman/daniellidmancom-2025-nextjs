'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showReel, setShowReel] = useState(false);

  return (
    <main className="max-w-3xl mx-auto pb-10 font-sans">
      {/* Intro Section */}
      <section className="mb-12">
        <p className="text-xl">
          I’m Daniel — a motion designer and video editor currently exploring
          interactive motion design, performance rendering, and creative code.
        </p>

        <div>
          <h2 className="text-2xl font-semibold  mt-8 mb-4">My Reel</h2>
          {showReel ? (
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://player.vimeo.com/video/724972964?h=59d1872ce3&autoplay=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div
              className="relative cursor-pointer group"
              onClick={() => setShowReel(true)}
            >
              <img
                src="/reel-thumbnail.jpg" // Add this to your /public folder
                alt="Video reel thumbnail"
                className="rounded-xl shadow-md transition group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What I'm Working On Feed */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I’m Working On</h2>
        <ul className="space-y-6">
          <li>
            <div className="text-lg font-medium">Concert Visuals</div>
            <p className="text-gray-700">
              Volunteering with a band to bring their vision to life for a
              concert.
            </p>
          </li>
          <li>
            <div className="text-lg font-medium">
              Testing Three.js for 3D portfolio interaction
            </div>
            <p className="text-gray-700">
              Considering ways to embed lightweight 3D elements into a personal
              site without hurting performance.
            </p>
          </li>
          <li>
            <div className="text-lg font-medium">DanielLidman.com</div>
            <p className="text-gray-700">
              This website is built using Next.js and React.js, deployed on
              Vercel. It's a work in progress, more updates coming soon!
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
