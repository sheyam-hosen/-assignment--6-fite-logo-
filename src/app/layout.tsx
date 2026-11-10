import type { Metadata } from "next";
import Navbar from "./Navbar";
import { WorkoutProvider } from "@/context/WorkoutContext";
import Toast from "./components/common/Toast";
import Footer from "./components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#090b0f] text-white antialiased">
        <WorkoutProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toast />
        </WorkoutProvider>
      </body>
    </html>
  );
}