import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BgRemoved App - Download APK | Apcodesphere',
  description: 'Download the BgRemoved Android APK directly. An open-source application built by Apcodesphere.',
};

export default function BgRemoved() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      
      <h1 className="text-3xl font-bold mb-6">BgRemoved App</h1>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Download the APK</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This app is currently available only for Android devices. You can download and install the APK directly from the link below.
        </p>
        
        {/* Make sure to place the unzipped APK file in the /public/apks/bgremoved directory as bgremoved.apk */}
        <a 
          href="/apks/bgremoved.apk" 
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Download BgRemoved APK
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contribute</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          BgRemoved is open-source! If you would like to contribute, report issues, or see how it was built, you can visit the repository on GitHub.
        </p>
        <a 
          href="https://github.com/apreezofficial/bgremoved" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
        >
          View Repository on GitHub
        </a>
      </div>
    </main>
  );
}
