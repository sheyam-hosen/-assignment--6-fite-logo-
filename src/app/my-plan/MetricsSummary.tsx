
export default function MetricsSummary({
  exercises,
  minutes,
  calories,
}: {
  exercises: number;
  minutes: number;
  calories: number;
}) {
  const metrics = [
    {
      label: "Exercises",
      value: exercises,
    },
    {
      label: "Minutes",
      value: minutes,
    },
    {
      label: "Calories",
      value: calories,
    },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#141922] px-4 py-4">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className="px-2 first:pl-0 last:pr-0 sm:px-5"
        >
          <p className="text-[9px] font-bold text-gray-500 sm:text-[10px]">
            {metric.label}
          </p>

          <h3
            className={`mt-1 text-xl font-black sm:text-2xl ${
              index === 0 ? "text-[#ccff00]" : "text-white"
            }`}
          >
            {metric.value}
          </h3>
        </div>
      ))}
    </div>
  );
}
