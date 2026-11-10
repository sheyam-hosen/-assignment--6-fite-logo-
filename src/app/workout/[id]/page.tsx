import { getWorkoutById } from "@/services/api";

import { notFound } from "next/navigation";

import SpecsTable from "../../components/workout-details/SpecsTable";
// import InstructionList from "../../components/workout-details/InstructionList";
import WorkoutActions from "../../components/workout-details/WorkoutActions";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Left Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141922] lg:sticky lg:top-28 lg:h-[600px]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[350px] w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="mb-4 text-[10px] font-black tracking-[3px] text-[#ccff00]">
            WORKOUT DETAILS
          </p>

          <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            {workout.description}
          </p>

          {/* Categories */}
          <div className="my-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00]/10 px-4 py-2 text-[10px] font-black uppercase text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-black uppercase">
              Key Specs
            </h3>

            <SpecsTable workout={workout} />
          </div>

         
          {/* Actions */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </section>
  );
}