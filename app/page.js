'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [showReel, setShowReel] = useState(false);

  return (
    <main className="max-w-3xl mx-auto pb-10 font-sans">
      {/* Intro Section */}
      <section className="mb-12">
        <p className="text-xl">
          I’m Daniel — a web developer currently exploring interactive motion
          design, performance video iteration, and creative code.
        </p>
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
              DL Video Inspiration Board
            </div>
            <p className="text-gray-700">
              Building an application to collect and organize video resources
              and references for video ideation.
            </p>
          </li>
          <li>
            <div className="text-lg font-medium">DanielLidman.com</div>
            <p className="text-gray-700">
              {`This website is built using Next.js and React.js, deployed on
              Vercel. It's a work in progress, more updates coming soon!`}
            </p>
          </li>
          <li>
            <div className="text-lg font-medium">
              <Link href="">Crossfit Leaderboard Application</Link>
            </div>
            <p className="text-gray-700">
              Mimicking the games.crossfit.com open leaderboard, but for anyone
              to create and display their competition leaderboards.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
