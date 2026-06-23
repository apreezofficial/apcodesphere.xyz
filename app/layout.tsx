import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precious Adedokun",
  description: "Portfolio of Precious Adedokun",
  icons: {
    icon: "https://www.preciousadedokun.com.ng/icon.png",
  },
  openGraph: {
    title: "Precious Adedokun",
    description: "Portfolio of Precious Adedokun",
    images: [
      {
        url: "/image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <a
          href="https://myhappr.com/apcodesphere"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50"
        >
          <img
            src="https://myhappr.com/icons/myhappr-icon-transparent.png"
            alt="Support Me"
            className="w-14 h-14"
          />
        </a>
      </body>
    </html>
  );
}
