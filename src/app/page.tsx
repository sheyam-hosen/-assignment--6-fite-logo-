import Hero from "@/app/components/home/Hero";
import Library from "@/app/components/home/Library";
import { getWorkouts } from "@/services/api";

export default async function Page() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />
      <Library workouts={workouts} />
    </>
  );
}