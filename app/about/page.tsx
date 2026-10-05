import Link from 'next/link';

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
        I'm a Software Engineer and CEO of <a href="https://www.google.com/search?q=proforms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Proforms</a>. I'm originally from Oyo State, Nigeria. I owe much of my career to the Web Development, striving toward open source.
      </p>
      <p className="mb-4">
        I spent my early years learning and exploring web technologies, developing a passion for creating beautiful and functional digital experiences. My journey in tech has been driven by curiosity and a desire to build tools that make a difference.
      </p>
      <p className="mb-4">
        Currently, I am working remotely as a developer for an international company, Geeks Global. It's been an incredible opportunity to tackle complex challenges and build impactful solutions on a larger scale. Below is a look at my journey and past experiences:
      </p>
      <div className="space-y-8 mt-6">
        <div>
          <p className="font-medium">
            Junior Laravel Developer at <a href="https://www.google.com/search?q=paytonltd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Paytonltd</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Built and maintained scalable web applications using Laravel framework. Collaborated with cross-functional teams to deliver features on time while ensuring code quality and best practices.
          </p>
        </div>
        <div>
          <p className="font-medium">
            Intern at <a href="https://www.google.com/search?q=Syticks+ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Syticks ng</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Gained hands-on experience in modern web development workflows. Worked on real-world projects, learning industry standards and best practices from experienced developers.
          </p>
        </div>
        <div>
          <p className="font-medium">
            Software Developer at <a href="https://www.google.com/search?q=Mvp+ginger+labs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Mvp Ginger Labs</a>, promoted to Technical Team Lead after 3 months
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Developed core fintech applications from concept to production. As Technical Team Lead, mentored junior developers and established coding standards that improved team productivity by 40%.
          </p>
        </div>
        <div>
          <p className="font-medium">
            SEO Developer and WordPress Developer at <a href="https://www.google.com/search?q=the+heritage+times" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">The Heritage Times</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Optimized website performance and search engine rankings, resulting in a significant increase in organic traffic. Built custom WordPress themes and plugins to enhance content management capabilities.
          </p>
        </div>
        <div>
          <p className="font-medium">
            Developer at <a href="https://www.google.com/search?q=Geeks+Global" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Geeks Global</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Contributed to large-scale web applications serving thousands of users. Implemented cutting-edge technologies and architectures to solve complex business challenges.
          </p>
        </div>
      </div>
    </main>
  );
}
