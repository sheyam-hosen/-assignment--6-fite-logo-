"use client";

import { useWorkout } from "@/context/WorkoutContext";
export default function Toast() {
  const { toast } = useWorkout();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-xl border border-[#ccff00]/30 bg-[#171b21] px-5 py-4 shadow-2xl">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-black">
          ✓
        </span>

        <p className="text-sm font-medium text-white">
          {toast}
        </p>
      </div>
    </div>
  );
}