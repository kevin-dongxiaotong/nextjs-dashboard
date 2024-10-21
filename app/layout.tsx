import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nextjs项目",
  description: "nextjs练习项目",
  keywords: "nextjs, reactjs, typescript",
  openGraph: {
    images: "/hero-desktop.png",
  },
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
