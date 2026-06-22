interface Project {
  id: string;
  dbId?: number;
  title: string;
  date: string;
  description: string;
  tech: string[];
  category: string[];
  slug: string;
  directUrl?: string;
}

const projects: Project[] = [
  {
    id: "proj-1",
    dbId: 27,
    title: "Proforms",
    date: "July 2025",
    description:
      "Proforms is a dynamic form builder and data collection platform designed for rapid deployment.",
    tech: ["PHP", "MySQL", "Next.js", "Livewire", "Blade", "Tailwind CSS"],
    category: ["Fullstack", "Frontend", "Backend"],
    slug: "proforms",
  },
  {
    id: "proj-itrust",
    title: "iTrust Rapid Logistics",
    date: "March 2026",
    description:
      "A high-performance shipment and logistics platform based in Nigeria, featuring real-time tracking.",
    tech: ["PHP", "Laravel", "MySQL", "Node.js", "Socket.io", "Twilio", "Resend"],
    category: ["Fullstack", "Logistics", "SaaS"],
    slug: "itrust-rapid-logistics",
  },
  {
    id: "proj-1-5",
    dbId: 34,
    title: "Agreonpay",
    date: "February 1, 2026",
    description: "Complete Farm-to-Market App. Connecting farmers, vendors, and consumers.",
    tech: ["PHP", "React Native", "MySQL", "Node.js", "OpenAI API"],
    category: ["Fullstack", "Backend", "Mobile"],
    slug: "agreonpay",
  },
  {
    id: "proj-3",
    dbId: 33,
    title: "Brilliance Healthcare Academy",
    date: "January 12, 2026",
    description: "An end-to-end e-learning platform for a UK-based institution with Stripe payments.",
    tech: ["PHP", "MySQL", "Laravel", "Stripe", "Proforms"],
    category: ["Fullstack", "Frontend", "Backend"],
    slug: "brilliance-healthcare",
  },
  {
    id: "proj-apanalytics",
    title: "APAnalytics",
    date: "January 2026",
    description:
      "A privacy-first, cookie-free Google Analytics alternative trusted by 12,000+ sites.",
    tech: ["PHP", "Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    category: ["Fullstack", "SaaS", "Developer Tool"],
    slug: "apanalytics",
  },
  {
    id: "proj-idoff",
    title: "Idoff Enterprise (in dev)",
    date: "2026",
    description: "Enterprise solution for businesses, churches, and schools to manage sign-ins and attendance.",
    tech: [],
    category: [],
    slug: "",
    directUrl: "https://enterprise.idoff.net",
  },
  {
    id: "proj-velocars",
    title: "Velocars Rentals (in dev)",
    date: "2026",
    description: "Full rental car organization platform for managing vehicle rentals.",
    tech: [],
    category: [],
    slug: "",
    directUrl: "https://dev.veloautos.com",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <section id="projects">
        <h2 className="text-lg font-semibold mb-5 mt-10">Few of What I Have Done</h2>
        <div className="space-y-8 mt-6">
          {projects.map((project) => (
            <div key={project.id}>
              <p className="font-medium">
                <a
                  href={project.directUrl || `https://preciousadedokun.com.ng/projects/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {project.title}
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{project.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <h2 className="text-lg font-semibold mb-5 mt-10">About</h2>
        <p className="mb-4">
          I&apos;m a Software Engineer and CEO of <a href="https://www.google.com/search?q=proforms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Proforms</a>. I&apos;m originally from Oyo State, Nigeria. I owe much of my career to the Web Development, striving toward open source.
        </p>
        <p className="mb-4">
          I spent my early years learning and exploring web technologies, developing a passion for creating beautiful and functional digital experiences. My journey in tech has been driven by curiosity and a desire to build tools that make a difference.
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
      </section>

      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400">
        <p>Still developing this page</p>
      </footer>
    </main>
  );
}
