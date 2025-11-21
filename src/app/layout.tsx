import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using 'Inter' for that clean, senior engineering look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvellous Posu | Senior Frontend Engineer",
  description: "Senior Frontend Engineer specializing in React, Next.js, and Web3. Architecting scalable fintech infrastructure and decentralized applications.",
  keywords: ["Frontend Engineer", "Web3", "Next.js", "React", "TypeScript", "Fintech", "Nigeria", "Remote"],
  openGraph: {
    title: "Marvellous Posu | Senior Frontend Engineer",
    description: "Building scalable financial infrastructure. $2.5M+ TVL secured. 5000+ active users.",
    url: "https://dornmarv.github.io", 
    siteName: "Marvellous Posu Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        
        {/* Optional: Add a subtle grain/noise texture overlay for extra "texture" */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </body>
    </html>
  );
}