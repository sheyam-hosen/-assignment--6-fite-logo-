
import Link from "next/link";

export default function EmptyPlanState() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#141922] px-5 py-12 text-center">

      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ccff00]/10 text-2xl text-[#ccff00]">
        +
      </div>

      <h3 className="text-sm font-black uppercase text-white">
        Nothing Here Yet
      </h3>

      <p className="mt-2 max-w-sm text-xs leading-5 text-gray-500">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#library"
        className="mt-5 rounded-lg bg-[#ccff00] px-5 py-2.5 text-[10px] font-black uppercase text-black transition hover:bg-white"
      >
        Go to Workouts
      </Link>

    </div>
  );
}
