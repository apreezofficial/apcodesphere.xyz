import Link from 'next/link';

const hardware = [
  {
    id: "1",
    name: "HP ProBook x360 440 G1",
    details: "Intel Core i5-8250U · 8GB RAM · 64-bit · 10-point touch",
    type: "Daily Driver"
  },
  {
    id: "2",
    name: "Oppo A3x 5G",
    details: "5G · Android · Everyday carry",
    type: "Mobile"
  },
  {
    id: "3",
    name: "iPhone 15 Plus",
    details: "Content Creation · Photography & Video capture",
    type: "Media Engine"
  },
];

const devTools = [
  "VS Code",
  "Kiro",
  "Figma",
  "Postman",
  "TablePlus",
  "Docker Desktop",
  "GitHub"
];

const stack = [
  "Next.js",
  "Laravel",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Vue.js",
  "React Native",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Git",
  "Linux",
  "WordPress",
  "Framer Motion",
  "Java"
];

const dailyApps = [
  "Notion",
  "Spotify",
  "Brave",
  "Discord / Slack",
  "Drop a Cookie 🍪"
];

export default function Uses() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Uses</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        A peek into my digital workspace.
      </p>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">The Hardware</h2>
        <div className="space-y-4">
          {hardware.map((item) => (
          <div key={item.id} className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{item.details}</p>
          </div>
        ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Dev Tools</h2>
        <div className="flex flex-wrap gap-3">
          {devTools.map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((s, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Daily Apps</h2>
        <div className="flex flex-wrap gap-3">
          {dailyApps.map((app, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {app}
            </span>
          ))}
        </div>
      </section>
      <p className="mt-10">
        View full setup at{" "}
        <a
          href="https://www.preciousadedokun.com.ng/uses"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          https://www.preciousadedokun.com.ng/uses
        </a>
      </p>
    </main>
  );
}
