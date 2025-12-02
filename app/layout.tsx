import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OASIS BI PRO - Platform Business Intelligence SaaS Terdepan",
  description: "Pure Business Intelligence SaaS Platform. Analytics software terbaik untuk bisnis Anda - BUKAN payment processor atau payment aggregator.",
  keywords: "business intelligence, analytics, saas, dashboard, data visualization, bi platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
