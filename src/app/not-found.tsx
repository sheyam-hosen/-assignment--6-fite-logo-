import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">

      <h1 className="text-8xl font-black text-[#ccff00]">
        404
      </h1>

      <h2 className="mt-5 text-xl font-black uppercase">
        Page Not Found
      </h2>

      <p className="mt-3 text-sm text-gray-500">
        The workout or page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-7 rounded-lg bg-[#ccff00] px-7 py-3 text-xs font-black text-black hover:bg-white"
      >
        BACK TO HOME
      </Link>

    </section>
  );
}