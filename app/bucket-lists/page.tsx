import Link from 'next/link';

interface BucketItem {
  id: string;
  title: string;
  category: string;
  date?: string;
  description: string;
}

const bucketItems: BucketItem[] = [
  {
    id: "1",
    title: "Launch a SaaS product",
    category: "Career & Code",
    date: "2025",
    description: "Build something people pay for. Not a side project that lives in a GitHub repo — a real product with real users and real revenue.",
  },
  {
    id: "2",
    title: "Get a remote job",
    category: "Career & Code",
    date: "2024",
    description: "Full-time remote at a forward-thinking company. No commute, no office politics — just shipping code from wherever.",
  },
  {
    id: "3",
    title: "First open-source contribution",
    category: "Career & Code",
    date: "2025",
    description: "Contributed a feature to a popular open-source library — Laravel. First PR merged, started driving traffic to my GitHub.",
  },
  {
    id: "4",
    title: "Remote work with an international client",
    category: "Career & Code",
    date: "2025",
    description: "A software engineer found me online and started outsourcing work. That first payment in USD turned into an ongoing collaboration.",
  },
  {
    id: "5",
    title: "Create portfolio website",
    category: "Inside Out",
    date: "2024",
    description: "This site. Every pixel is intentional, every interaction earned its place. The project that ties everything else together.",
  },
  {
    id: "6",
    title: "Go pure vegetarian",
    category: "Inside Out",
    description: "No meat, no eggs. No exceptions, no 'just this once.' Years in and don't miss it.",
  },
  {
    id: "7",
    title: "Quit sugar, coffee, and packaged foods",
    category: "Inside Out",
    description: "All at once. No cheat days. The hardest bugs to fix are the ones in your diet.",
  },
  {
    id: "8",
    title: "Skydiving",
    category: "Places & Thrills",
    description: "My legs shake on balconies. 13,000 feet of freefall. The fear is the point.",
  },
  {
    id: "9",
    title: "Solo travel to another country",
    category: "Places & Thrills",
    description: "No itinerary, no safety net. A place where I don't speak the language. Getting lost on purpose.",
  },
  {
    id: "10",
    title: "Hit 1K stars on a GitHub repo",
    category: "Career & Code",
    description: "By building something so useful that a thousand strangers vouch for it.",
  },
];

export default function BucketLists() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Bucket List</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Things I want to do at least once. Goals, adventures, and personal milestones.
      </p>
      <div className="space-y-8">
        {bucketItems.map((item) => (
          <div key={item.id} className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}{item.date ? ` · ${item.date}` : ""}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-10">
        View all at{" "}
        <a
          href="https://www.preciousadedokun.com.ng/bucket-list"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          https://www.preciousadedokun.com.ng/bucket-list
        </a>
      </p>
    </main>
  );
}
