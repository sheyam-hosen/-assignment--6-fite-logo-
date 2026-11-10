"use client";

import type { Workout } from "../../../types/workout";
import { useWorkout } from "@/context/WorkoutContext";
export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {
  const { addToPlan, saveWorkout, plan, saved } = useWorkout();

  const alreadyPlanned = plan.some(
    (item) => item.id === workout.id
  );

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        disabled={alreadyPlanned || plan.length >= 5}
        className="flex-1 rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-black text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        {alreadyPlanned
          ? "✓ ALREADY IN PLAN"
          : "＋ ADD TO TODAY'S PLAN"}
      </button>

      <button
        onClick={() => saveWorkout(workout)}
        disabled={alreadySaved}
        className="flex-1 rounded-lg border border-white/20 px-5 py-3 text-xs font-black text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {alreadySaved ? "✓ SAVED" : "♡ SAVE FOR LATER"}
      </button>
    </div>
  );
}
