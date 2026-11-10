
"use client";

import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import type { PlanTab } from "@/types/workout";
import MetricsSummary from "./MetricsSummary";
import EmptyPlanState from "./EmptyPlanState";
import PlannedCard from "./PlannedCard";
import PlanTabs from "./PlanTabs";

export default function MyPlanContent() {
  const [activeTab, setActiveTab] = useState<PlanTab>("today");

  const {
    plan,
    saved,
    loading,
  } = useWorkout();

  const minutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const calories = plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  if (loading) {
    return (
      <div className="py-20 text-center text-sm text-[#ccff00]">
        Loading workouts…
      </div>
    );
  }

  const currentList = activeTab === "today" ? plan : saved;

  return (
    <div className="space-y-8">

      {/* Metrics */}
      <MetricsSummary
        exercises={plan.length}
        minutes={minutes}
        calories={calories}
      />

      {/* Tabs */}
      <PlanTabs
        activeTab={activeTab}
        onChange={setActiveTab}
        planCount={plan.length}
        savedCount={saved.length}
      />

      {/* Workout List */}
{currentList.length === 0 ? (
  <EmptyPlanState />
) : (
  <div className="space-y-4">
    {currentList.map((workout) => (
      <PlannedCard
        key={workout.id}
        workout={workout}
        isDone={
          activeTab === "today" &&
          "isDone" in workout &&
          workout.isDone === true
        }
        savedMode={activeTab === "saved"}
      />
    ))}
  </div>
)}
</div>
);
}