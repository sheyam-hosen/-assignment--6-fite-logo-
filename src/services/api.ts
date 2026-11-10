import type { Workout } from "@/types/workout";
 
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.abcz.workers.dev/api/fitlog";
 
// Workout data rarely changes, so cache it and refresh once an hour.
const REVALIDATE_SECONDS = 3600;
 
// Next.js uses special errors internally (dynamic rendering, notFound, redirect).
// They must pass through untouched, otherwise try/catch breaks Next.js behaviour.
function isNextInternalError(error: unknown): boolean {
  if (typeof error !== "object" || error === null) return false;
 
  const digest = (error as { digest?: unknown }).digest;
 
  return (
    typeof digest === "string" &&
    (digest === "DYNAMIC_SERVER_USAGE" ||
      digest === "BAILOUT_TO_CLIENT_SIDE_RENDERING" ||
      digest.startsWith("NEXT_"))
  );
}
 
export async function getWorkouts(): Promise<Workout[]> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
 
    if (!response.ok) {
      throw new Error(`Failed to fetch workouts (status ${response.status})`);
    }
 
    const data: Workout[] = await response.json();
 
    return data;
  } catch (error) {
    if (isNextInternalError(error)) throw error;
 
    console.error("Workout API Error:", error);
    throw error;
  }
}
 
export async function getWorkoutById(
  id: string | number
): Promise<Workout | null> {
  try {
    const workouts = await getWorkouts();
 
    return workouts.find((workout) => workout.id === Number(id)) ?? null;
  } catch (error) {
    if (isNextInternalError(error)) throw error;
 
    console.error("Workout Details Error:", error);
    return null;
  }
}