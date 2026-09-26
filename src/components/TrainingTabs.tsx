"use client";
import { useState } from "react";
import { trainings } from "@/lib/data";
import TrainingCard from "./TrainingCard";

const tabs = [
  { key: "all", label: "All Trainings" },
  { key: "upcoming", label: "Upcoming" },
  { key: "ongoing", label: "Ongoing" },
  { key: "Online", label: "Online" },
  { key: "Workshop", label: "Workshops" },
] as const;

export default function TrainingTabs({ limit, swipe = false }: { limit?: number; swipe?: boolean }) {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("all");
  const list = trainings.filter((t) => tab === "all" || t.status === tab || t.mode === tab);
  return (
    <>
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${
              tab === t.key ? "bg-navy-700 text-white shadow" : "bg-white text-navy-700 ring-1 ring-navy-100 hover:ring-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className={`${swipe ? "mobile-scroll" : "grid"} gap-5 sm:grid-cols-2 lg:grid-cols-4`}>
        {list.slice(0, limit).map((t) => (
          <TrainingCard key={t.title} t={t} />
        ))}
      </div>
    </>
  );
}
