import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://infinicrease.vercel.app/",
  title: "Iinfinicrease",
  description: "Iinfinicrease",
  openGraph: {
    title: "Iinfinicrease",
    description: "Iinfinicrease",
    images: ["/assets/images/meta/meta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
