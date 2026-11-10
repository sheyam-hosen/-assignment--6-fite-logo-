export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

      <p className="text-xs font-bold tracking-wider text-gray-400">
        LOADING WORKOUTS...
      </p>
    </div>
  );
}