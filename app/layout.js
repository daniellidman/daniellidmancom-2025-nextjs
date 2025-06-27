import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Daniel Lidman',
  description: 'Creative developer, animator, and editor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <header className="mb-10">
            <h1 className="text-3xl font-bold">Daniel Lidman</h1>
            <p className="text-lg text-gray-600">
              Video Editor · Animator · Web Developer
            </p>
            <nav className="mt-4 space-x-4">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
              <Link href="/projects" className="text-blue-600 hover:underline">
                Projects
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </nav>
          </header>

          {children}

          <footer className="mt-16 border-t pt-6 text-gray-600">
            <p>
              I’m open to full-time or freelance roles. If you’re hiring or
              collaborating,
              <Link href="/contact" className="text-blue-600 hover:underline">
                {' '}
                let’s talk
              </Link>
              .
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

// <html lang="en">
//   <body className={`${inter.variable} bg-white text-gray-900`}>
//     {children}
//   </body>
// </html>
