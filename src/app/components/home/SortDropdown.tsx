"use client";

import { SortOption } from "@/types/workout";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500">Sort By</span>

      <div className="relative">
        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value as SortOption)
          }
          className="appearance-none rounded-lg border border-white/10 bg-[#141922] py-2 pl-4 pr-9 text-xs font-bold text-white outline-none focus:border-[#ccff00]"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#ccff00]">
          ▼
        </span>
      </div>
    </div>
  );
}