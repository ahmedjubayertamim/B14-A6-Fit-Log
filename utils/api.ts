import { Workout } from "@/types";


const API_URL =
  "https://api.abcz.workers.dev/api/fitlog";


// Get all workouts

export async function getAllWorkouts(): Promise<Workout[]> {

  const res = await fetch(API_URL);


  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }


  return res.json();

}



// Get single workout

export async function getWorkoutById(
  id: string
): Promise<Workout | null> {

  const workoutId = id.trim();

  const res = await fetch(
    `${API_URL}/${encodeURIComponent(workoutId)}`,
    {
      cache: "no-store",
    }
  );


  if (!res.ok) {
    return null;
  }


  return res.json();

}