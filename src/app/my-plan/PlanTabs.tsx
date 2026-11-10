"use client";

import { PlanTab } from "@/types/workout";

interface Props {
  activeTab: PlanTab;
  onChange: (tab: PlanTab) => void;
  planCount: number;
  savedCount: number;
}

export default function PlanTabs({
  activeTab,
  onChange,
  planCount,
  savedCount,
}: Props) {
  return (
    <div className="flex gap-3 border-b border-white/10">
      <button
        onClick={() => onChange("today")}
        className={`border-b-2 px-5 py-4 text-xs font-black ${
          activeTab === "today"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-gray-500"
        }`}
      >
        Today's Plan ({planCount})
      </button>

      <button
        onClick={() => onChange("saved")}
        className={`border-b-2 px-5 py-4 text-xs font-black ${
          activeTab === "saved"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-gray-500"
        }`}
      >
        Saved ({savedCount})
      </button>
    </div>
  );
}