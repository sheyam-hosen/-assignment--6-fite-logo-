import Link from "next/link";
import type { Workout } from "@/types/workout";

export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#141922] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#202630]">
        <img
          src={workout.image}
          alt={workout.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-4">

        {/* Categories */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="line-clamp-1 text-sm font-black uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 truncate text-xs text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}