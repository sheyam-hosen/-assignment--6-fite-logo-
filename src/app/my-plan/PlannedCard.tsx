"use client";

import Link from "next/link";
import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

interface Props {
  workout: Workout;
  isDone?: boolean;
  savedMode?: boolean;
}

export default function PlannedCard({
  workout,
  isDone = false,
  savedMode = false,
}: Props) {
  const {
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = useWorkout();

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141922] p-3 sm:flex-row sm:items-center">

      {/* Thumbnail */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-28 w-full rounded-lg object-cover sm:h-20 sm:w-28"
      />

      {/* Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-black uppercase">
          {workout.name}
        </h3>

        <p className="mt-2 text-[10px] text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-lg border border-white/10 px-3 py-2 text-[10px] font-bold text-gray-300 hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        {!savedMode && (
          <button
            onClick={() => markAsDone(workout.id)}
            disabled={isDone}
            className="rounded-lg bg-[#ccff00] px-3 py-2 text-[10px] font-black text-black disabled:opacity-40"
          >
            {isDone ? "✓ DONE" : "✓ MARK AS DONE"}
          </button>
        )}

        <button
          onClick={() =>
            savedMode
              ? removeFromSaved(workout.id)
              : removeFromPlan(workout.id)
          }
          className="rounded-lg border border-red-500/30 px-3 py-2 text-xs text-red-400 hover:bg-red-500 hover:text-white"
          aria-label="Remove workout"
        >
          ✕
        </button>
      </div>
    </div>
  );
}