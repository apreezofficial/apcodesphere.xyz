import Link from 'next/link';

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
      "Proforms is a form management platform that helps businesses and individuals handle form submissions, similar to Formspree.",
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
  {
    id: "proj-vidodash",
    title: "Vidodash",
    date: "2026",
    description: "Platform that connects hosts to users just like Airbnb, with a mobile app and various services.",
    tech: [],
    category: [],
    slug: "",
    directUrl: "https://vidodash.com",
  },
  {
    id: "proj-1-5",
    dbId: 34,
    title: "Agreonpay",
    date: "February 1, 2026",
    description: "Complete Farm-to-Market mobile and web app connecting farmers, vendors, and consumers.",
    tech: ["PHP", "React Native", "MySQL", "Node.js", "OpenAI API"],
    category: ["Fullstack", "Backend", "Mobile"],
    slug: "agreonpay",
  },
  {
    id: "proj-3",
    dbId: 33,
    title: "Brilliance Healthcare Academy",
    date: "January 12, 2026",
    description: "An end-to-end e-learning platform for a UK-based healthcare and technology academy.",
    tech: ["PHP", "MySQL", "Laravel", "Stripe", "Proforms"],
    category: ["Fullstack", "Frontend", "Backend"],
    slug: "brilliance-healthcare",
  },
  {
    id: "proj-apanalytics",
    title: "APAnalytics",
    date: "January 2026",
    description:
      "A privacy-first, cookie-free Google Analytics alternative providing real-time insights and funnel analysis.",
    tech: ["PHP", "Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    category: ["Fullstack", "SaaS", "Developer Tool"],
    slug: "apanalytics",
  },
];

export default function FewOfMyWorks() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-10">Few of My Works</h1>
      <div className="space-y-8">
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
    </main>
  );
}
