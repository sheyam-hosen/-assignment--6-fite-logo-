import Link from "next/link";

function DumbbellIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0d0f13]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#ccff00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ccff00]"
        >
          <DumbbellIcon className="h-5 w-5" />
          <span className="text-sm font-black uppercase tracking-wider text-white">
            FitLog
          </span>
        </Link>

        <p className="text-center text-sm text-gray-500 md:text-right">
          © {year} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}