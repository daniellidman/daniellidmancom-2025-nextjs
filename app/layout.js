import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import HoverAvatar from './components/HoverAvatar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const inter = Inter({
  // variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Daniel Lidman',
  description: 'Creative developer, animator, and editor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 font-sans">
        <div className="font-inter">
          <header className="mb-10 bg-white p-8 py-20 ">
            <HoverAvatar />
            <h2 className="text-2xl font-[600] text-center my-4">
              Hi, I&apos;m Daniel Lidman
            </h2>
            <h1 className="text-6xl  font-black text-center my-6">
              Web Developer
            </h1>
            <p className="max-w-3xl m-auto text-lg font-[300]">
              I build web applications that are as functional as they are
              engaging, combining reliable code with the creativity I bring from
              my background in{' '}
              {
                <Link href="http://www.daniel-lidman.com" target="blank">
                  video and motion design.
                </Link>
              }
            </p>
          </header>
          <div className="p-8">{children}</div>
          <div className="p-8 bg-white">
            <footer className="py-6 font-[300] text-black max-w-3xl mx-auto text-right flex justify-between">
              <p className="text-sm text-gray-500">Daniel Lidman 2025</p>
              <div>
                <Link href="http://www.github.com/daniellidman" target="blank">
                  <FaGithub className="inline ml-4 hover:text-custom-primary" />
                </Link>
                <Link
                  href="http://www.linkedin.com/in/daniellidman"
                  target="blank"
                >
                  <FaLinkedin className="inline ml-4 hover:text-custom-primary" />
                </Link>
                <Link href="mailto:daniel@daniellidman.com" target="blank">
                  <FaEnvelope className="inline ml-4 hover:text-custom-primary" />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
