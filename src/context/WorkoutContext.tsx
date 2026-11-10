"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { PlannedWorkout, Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: PlannedWorkout[];
  saved: Workout[];
  loading: boolean;

  planCount: number;
  savedCount: number;

  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;

  toast: string;
  showToast: (message: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<PlannedWorkout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  // Load localStorage
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        setPlan(JSON.parse(savedPlan));
      }

      if (savedWorkouts) {
        setSaved(JSON.parse(savedWorkouts));
      }
    } catch (error) {
      console.error("LocalStorage Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, loading]);

  // Save saved workouts
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  // Toast notification
  const showToast = useCallback((message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  }, []);

  // Add workout to today's plan
  const addToPlan = useCallback(
    (workout: Workout): boolean => {
      if (plan.some((item) => item.id === workout.id)) {
        showToast("Already added to today's plan!");
        return false;
      }

      if (plan.length >= 5) {
        showToast("Today's plan is full! Maximum 5 lifts.");
        return false;
      }

      setPlan((prev) => [
        ...prev,
        { ...workout, isDone: false },
      ]);

      showToast("Added to today's plan!");
      return true;
    },
    [plan, showToast]
  );

  // Save workout
  const saveWorkout = useCallback(
    (workout: Workout): boolean => {
      if (saved.some((item) => item.id === workout.id)) {
        showToast("Workout already saved!");
        return false;
      }

      setSaved((prev) => [...prev, workout]);

      showToast("Workout saved successfully!");
      return true;
    },
    [saved, showToast]
  );

  // Remove from plan
  const removeFromPlan = useCallback(
    (id: number) => {
      setPlan((prev) => prev.filter((item) => item.id !== id));
      showToast("Workout removed from plan!");
    },
    [showToast]
  );

  // Remove from saved
  const removeFromSaved = useCallback(
    (id: number) => {
      setSaved((prev) => prev.filter((item) => item.id !== id));
      showToast("Workout removed from saved!");
    },
    [showToast]
  );

  // Mark as done
  const markAsDone = useCallback(
    (id: number) => {
      setPlan((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, isDone: true }
            : item
        )
      );

      showToast("Workout completed!");
    },
    [showToast]
  );

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        loading,
        planCount: plan.length,
        savedCount: saved.length,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        toast,
        showToast,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}