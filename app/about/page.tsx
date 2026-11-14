import Link from 'next/link';
import { NowListening } from '@/components/NowListening';

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-10">About</h1>
      <p className="mb-4">
        I'm a Software Engineer and CEO of <a href="https://www.google.com/search?q=voieform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">voieform</a>, originally from Oyo State, Nigeria. I owe much of my career to web development and a drive toward open source.
      </p>
      <p className="mb-4">
        Currently, I am working remotely as a full stack software developer at <a href="https://geeksglobalworld.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Geeks Global</a>, where I build web and app applications.
      </p>
      <p className="mb-4">
        For over a year, I have ranked for keywords like{' '}
        <a href="https://www.google.com/search?q=best+web+developer+in+nigeria" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">best web developer in nigeria</a>,{' '}
        <a href="https://www.google.com/search?q=best+web+developer+in+africa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">best web developer in africa</a>, and{' '}
        <a href="https://www.google.com/search?q=seo+expert+in+nigeria" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">seo expert in nigeria</a>.
      </p>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Hobbies & Interests</h2>
        <NowListening />
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          When I'm not writing code or building products, you can usually find me:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li>Playing Subway Surfers</li>
          <li>Working out in the gym</li>
          <li>Vibecoding to build cool stuff</li>
        </ul>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Also, whenever I'm bored, I love writing down my thoughts and sharing notes at <a href="https://penna.dev/apcodesphere" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">penna.dev/apcodesphere</a>. Check it out!
        </p>
      </div>
         
    </main>
  );
}
