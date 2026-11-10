export default function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-8 md:px-8">
      <div className="relative flex min-h-[300px] items-center overflow-hidden rounded-2xl border border-white/10 bg-[#141922] px-7 py-10 md:px-12">

        <div className="relative z-10 max-w-[600px]">
          <p className="mb-5 text-xs font-black tracking-[3px] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-[Arial] text-4xl font-black uppercase leading-[1.1] tracking-tight md:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-5 max-w-[480px] text-sm leading-7 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a
            lift, lock it into today's plan, and watch the week's
            work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#ccff00] px-6 py-3 text-xs font-black text-black transition hover:bg-white"
          >
            BROWSE WORKOUTS
            <span>→</span>
          </a>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[45%] md:block">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900"
            alt="Gym workout"
            className="h-full w-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#141922] via-transparent to-transparent" />
        </div>

        <div className="absolute right-8 top-8 hidden h-2 w-2 rounded-full bg-[#ccff00] md:block" />
      </div>
    </section>
  );
}
