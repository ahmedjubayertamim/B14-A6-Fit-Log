"use client";

import Link from "next/link";
import { useState } from "react";

import { usePlan } from "@/context/PlanContext";

import PlanCard from "@/components/PlanCard";
import SavedCard from "@/components/SavedCard";
import MyPlanTabs from "@/components/MyPlanTabs";

export default function MyPlan() {
  const { plan, saved, toast } = usePlan();
  const [active, setActive] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = active === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = plan.reduce(
    (sum, item) => sum + item.duration,
    0
  );

  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  );

  return (
    <main className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-14
    ">
      <div className="
        max-w-6xl
        mx-auto
      ">
        <h1 className="
          text-5xl
          font-black
          uppercase
        ">
          MY PLAN
        </h1>

        <p className="
          text-gray-400
          mt-2
        ">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="
          mt-8
          bg-[#111]
          border
          border-white/10
          rounded-2xl
          grid
          grid-cols-3
          overflow-hidden
        ">
          <Metric title="Exercises" value={plan.length} />
          <Metric title="Minutes" value={totalMinutes} />
          <Metric title="Calories" value={totalCalories} />
        </div>

        <div className="
          flex
          justify-between
          items-center
          mt-8
        ">
          <MyPlanTabs active={active} setActive={setActive} />

          <div className="
            flex
            items-center
            gap-2
            text-sm
          ">
            <span className="text-gray-400">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                bg-[#111]
                border
                border-white/20
                rounded-lg
                px-4
                py-2
                text-white
                outline-none
              "
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="
          mt-6
          space-y-4
        ">
          {sortedList.length === 0 ? (
            <div className="
              border
              border-dashed
              border-white/20
              rounded-2xl
              py-20
              text-center
            ">
              <h2 className="text-3xl font-black">NOTHING HERE YET</h2>
              <p className="text-gray-400 mt-3">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="btn btn-primary text-black mt-6"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            sortedList.map((item) =>
              active === "plan" ? (
                <PlanCard key={item.id} workout={item} />
              ) : (
                <SavedCard key={item.id} workout={item} />
              )
            )
          )}
        </div>
      </div>

      {toast && (
        <div className="toast toast-end toast-bottom">
          <div className="alert alert-success">{toast}</div>
        </div>
      )}
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="
      p-6
      border-r
      border-white/10
      last:border-none
    ">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-4xl font-black mt-2">{value}</h3>
    </div>
  );
}
