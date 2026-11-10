import MyPlanContent from "./MyPlanContent";

export default function MyPlanPage() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-300 px-5 py-12 md:px-8">

      <div className="mb-8">
        <p className="mb-3 text-[10px] font-black tracking-[3px] text-[#ccff00]">
          YOUR TRAINING DASHBOARD
        </p>

        <h1 className="text-3xl font-black uppercase tracking-tight">
          My Plan
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <MyPlanContent />

    </section>
  );
}