import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuj Choudhary | Professional Video Editor – Jaipur",
  description:
    "Award-winning video editor with 650+ projects, 45M+ views, and 5+ years of experience. Specializing in cinematic editing, color grading, motion graphics, and sound design.",
  keywords: [
    "video editor",
    "Anuj Choudhary",
    "Jaipur",
    "CapCut",
    "Premiere Pro",
    "After Effects",
    "color grading",
    "motion graphics",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
