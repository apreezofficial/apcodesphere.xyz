import Link from 'next/link';

export default function MyXyzs() {
  const projects = [
    {
      domain: 'apcodesphere.xyz',
      title: 'apcodesphere',
      description: 'A seriously polished portfolio... except it wasn\'t built to be serious. It\'s a fun project that looks like a professional portfolio but was created purely for the enjoyment of building something that looks legitimate.',
      url: 'https://apcodesphere.xyz',
    },
    {
      domain: 'uselesssass.xyz',
      title: 'Useless Sass',
      description: 'A hilariously useless site that does one thing and one thing only: tells you the time. That\'s it. Pure minimalism meets the absurd.',
      url: 'https://uselesssass.xyz',
    },
    {
      domain: 'iwasadev.xyz',
      title: 'I Was a Dev',
      description: 'A manifesto of sorts. I suddenly felt the urge to leave the development aspect of tech, and this is where I aim to drag people to go with me. A project about stepping away and finding meaning beyond code.',
      url: 'https://iwasadev.xyz',
    },
    {
      domain: 'apval.xyz',
      title: 'apVal',
      description: 'A Valentine\'s Day project for sending love letters, music cards, and heartfelt messages. Built just for the fun of it around the time I fell in love with Next.js. A playful exploration of what web development could be when romance meets code.',
      url: 'https://apval.xyz',
    },
  ];

  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">My .xyz's</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        A collection of projects I built for fun. These aren't serious professional work—they're playful experiments, absurd ideas, and projects that just felt right to build. Each one ends with .xyz and represents a different vibe, from looking professional to being intentionally useless.
      </p>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.domain} className="border-l-4 border-blue-600 pl-6 py-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              {project.domain}
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">The Story</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          These .xyz projects are my creative outlet. While my main portfolio showcases professional work, these domains represent the fun side of building—where I can experiment without the pressure of it needing to be "serious" or "impressive."
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          They're reminders that building things doesn't always have to have a grand purpose. Sometimes the best projects are just about having fun, making something absurd, or exploring ideas that are too unconventional for traditional portfolios.
        </p>
      </section>
    </main>
  );
}
