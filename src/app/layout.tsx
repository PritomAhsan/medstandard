import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const script = Caveat({ variable: "--font-script-face", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: { default: "MedStandard — Hospital Safety & Compliance", template: "%s | MedStandard" },
  description:
    "MedStandard helps hospitals in Bangladesh convert policies into trained staff, standardized procedures and measurable compliance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${script.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
