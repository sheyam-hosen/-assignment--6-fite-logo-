import { Workout } from "@/types/workout";

export default function SpecsTable({
  workout,
}: {
  workout: Workout;
}) {
  const specs = [
    ["EQUIPMENT", workout.equipment],
    ["DIFFICULTY", workout.difficulty],
    ["SETS", workout.sets],
    ["REPS", workout.reps],
    ["DURATION", `${workout.duration} min`],
    ["CALORIES", `${workout.caloriesBurned} kcal`],
    ["RATING", `★ ${workout.rating}`],
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141922]">
      {specs.map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-4 border-b border-white/5 px-4 py-3 last:border-0"
        >
          <span className="text-[10px] font-bold tracking-wider text-gray-500">
            {label}
          </span>

          <span className="text-xs font-bold text-white">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}