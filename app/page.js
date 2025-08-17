'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [showReel, setShowReel] = useState(false);

  return (
    <main className="max-w-3xl mx-auto pb-10">
      <section>
        <h2 className="text-2xl font-semibold mb-8">
          What I’m Working On Right Now
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <Image
            src="/dlVideoInspirationBoard.png"
            alt="Screenshot of web application"
            width={1200}
            height={600}
            className=" rounded-2xl drop-shadow-lg"
          />
          <div>
            <h3 className="text-xl my-4 font-bold">
              DL Video Inspiration Board
            </h3>
            <p className="text-sm my-4">
              Gallery for collecting, organizing, and watching references for
              video production.
            </p>
          </div>

          <Image
            src="/cfLeaderboard.png"
            alt="Screenshot of web application"
            width={1200}
            height={600}
            className=" rounded-2xl drop-shadow-lg"
          />
          <div>
            <h3 className="text-xl my-4 font-bold">CrossFit Leaderboard App</h3>
            <p className="text-sm my-4">
              Leaderboard mimicking the games.crossfit.com competition
              leaderboard.{' '}
            </p>
          </div>
          <Image
            src="/danielLidmanVideoPortfolio.png"
            alt="Screenshot of web application"
            width={1200}
            height={600}
            className=" rounded-2xl drop-shadow-lg"
          />
          <div>
            <h3 className="text-xl my-4 font-bold">Video Editing Portfolio</h3>
            <p className="text-sm my-4">
              Portfolio page for past video editing and animation projects.
            </p>
          </div>
          <Image
            src="/danielLidmanCom.png"
            alt="Screenshot of web application"
            width={1200}
            height={600}
            className=" rounded-2xl drop-shadow-lg"
          />
          <div>
            <h3 className="text-xl my-4 font-bold">Portfolio Website</h3>
            <p className="text-sm my-4">
              This website is built using Next.js and React.js, deployed on
              Vercel. It's a work in progress, more updates coming soon!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
