import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold mb-10">Precious Adedokun</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-blue-600 hover:underline dark:text-blue-400">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/few-of-my-works" className="text-blue-600 hover:underline dark:text-blue-400">
                Few of My Works
              </Link>
            </li>
            <li>
              <Link href="/bucket-lists" className="text-blue-600 hover:underline dark:text-blue-400">
                Bucket Lists
              </Link>
            </li>
            <li>
              <Link href="/uses" className="text-blue-600 hover:underline dark:text-blue-400">
                Uses
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://github.com/apreezofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://proforms.top"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Proforms
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
