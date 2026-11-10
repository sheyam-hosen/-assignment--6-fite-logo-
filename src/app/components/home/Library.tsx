"use client";

import { useMemo, useState } from "react";
import type { Workout, SortOption } from "../../../types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function Library({
  workouts,
}: {
  workouts: Workout[];
}) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const [search, setSearch] = useState("");

  const sortedWorkouts = useMemo(() => {
    const filtered = workouts.filter((workout) => {
      const query = search.toLowerCase();

      return (
        workout.name.toLowerCase().includes(query) ||
        workout.muscleGroups.some((group) =>
          group.toLowerCase().includes(query)
        )
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [workouts, sortBy, search]);

  return (
    <section
      id="library"
      className="mx-auto max-w-[1400px] px-5 py-16 md:px-8"
    >
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[10px] font-black tracking-[3px] text-[#ccff00]">
            EXPLORE YOUR POTENTIAL
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight">
            The Library
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search workouts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#141922] px-4 py-2.5 text-xs text-white outline-none focus:border-[#ccff00] sm:w-48"
          />

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>

      {/* Workout Grid */}
      {sortedWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-[#141922] py-16 text-center">
          <p className="font-bold text-gray-400">
            No workouts found.
          </p>
        </div>
      )}
    </section>
  );
}