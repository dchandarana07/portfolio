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
  title: "Divyansh Chandarana | Software Engineer",
  description:
    "Divyansh Chandarana - Software Engineer specializing in Backend/Cloud, Applied AI Systems, and Full-Stack development. Amazon SDE Intern, ASU Research Analyst. Building production systems at scale.",
  keywords: [
    "Divyansh Chandarana",
    "Software Engineer",
    "Backend Engineer",
    "Amazon SDE Intern",
    "ASU",
    "Arizona State University",
    "AI Systems",
    "Full Stack Developer",
    "Python",
    "Java",
    "AWS",
  ],
  authors: [{ name: "Divyansh Chandarana" }],
  creator: "Divyansh Chandarana",
  openGraph: {
    title: "Divyansh Chandarana | Software Engineer",
    description:
      "Software Engineer specializing in Backend/Cloud, Applied AI Systems, and Full-Stack development. Amazon SDE Intern, ASU Research Analyst.",
    type: "website",
    locale: "en_US",
    siteName: "Divyansh Chandarana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Chandarana | Software Engineer",
    description:
      "Software Engineer specializing in Backend/Cloud, Applied AI Systems, and Full-Stack development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
