import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh | Software Engineer & iOS Developer",
  description:
    "Personal portfolio of Divyansh - Software Engineer, iOS Developer, and Research Analyst. Building impact-driven solutions.",
  keywords: [
    "Software Engineer",
    "iOS Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Swift",
    "Portfolio",
  ],
  authors: [{ name: "Divyansh" }],
  openGraph: {
    title: "Divyansh | Software Engineer & iOS Developer",
    description:
      "Personal portfolio of Divyansh - Software Engineer, iOS Developer, and Research Analyst.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light only" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.documentElement.style.colorScheme = 'light';
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}
      >
        {children}
      </body>
    </html>
  );
}
