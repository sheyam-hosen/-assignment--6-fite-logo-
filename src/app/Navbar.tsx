"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";
export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = useWorkout();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0f]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-xl font-black tracking-wide text-[#ccff00]">
          FITLOG
        </Link>

        <ul className="flex items-center gap-6 text-sm font-bold">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-[#ccff00]" : "text-gray-400"}
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/my-plan"
              className={
                pathname === "/my-plan" ? "text-[#ccff00]" : "text-gray-400"
              }
            >
              My Plan
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>
            Plan{" "}
            <span className="rounded-full bg-[#ccff00] px-2 py-0.5 font-black text-black">
              {planCount}
            </span>
          </span>
          <span>
            Saved{" "}
            <span className="rounded-full border border-white/20 px-2 py-0.5 font-black text-white">
              {savedCount}
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
}