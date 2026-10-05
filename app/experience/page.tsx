import Link from 'next/link';

export default function Experience() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      
      <h1 className="text-2xl font-bold mb-6">Experience</h1>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          I barely update this page (about once in 3 months) so check <a href="https://preciousadedokun.com.ng" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">preciousadedokun.com.ng</a> for the latest update.
        </p>
      </div>

      <div className="space-y-8 mt-6">
        <div>
          <p className="font-medium">
            Developer at <a href="https://geeksglobalworld.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Geeks Global</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Contributed to large-scale web applications serving thousands of users. Implemented cutting-edge technologies and architectures to solve complex business challenges.
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
            Software Developer at <a href="https://www.google.com/search?q=Mvp+ginger+labs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Mvp Ginger Labs</a>, promoted to Technical Team Lead after 3 months
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Developed core fintech applications from concept to production. As Technical Team Lead, mentored junior developers and established coding standards that improved team productivity by 40%.
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
            Junior Laravel Developer at <a href="https://www.google.com/search?q=paytonltd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Paytonltd</a>
          </p>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Built and maintained scalable web applications using Laravel framework. Collaborated with cross-functional teams to deliver features on time while ensuring code quality and best practices.
          </p>
        </div>
      </div>
    </main>
  );
}
