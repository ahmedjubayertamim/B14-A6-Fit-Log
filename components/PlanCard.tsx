"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Clock,
  Flame,
  Star,
  Check,
  X
} from "lucide-react";

import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";


export default function PlanCard({
  workout,
}: {
  workout: Workout;
}) {


  const {
    removeFromPlan,
    markDone,
    showToast,
  } = usePlan();




  function handleDone(){

    markDone(workout.id);

    showToast(
      "Workout marked as done"
    );

  }





  function handleRemove(){

    removeFromPlan(workout.id);

    showToast(
      "Workout removed"
    );

  }




  return (

    <div className="
      bg-[#111]
      border
      border-white/10
      rounded-2xl
      p-5

      flex
      flex-col
      md:flex-row

      gap-5

      items-center
    ">



      {/* Thumbnail */}

      <Image

        src={workout.image}

        alt={workout.name}

        width={140}

        height={140}

        className="
          object-contain
          rounded-xl
        "

      />






      {/* Workout Info */}

      <div className="
        flex-1
      ">


        <h3 className="
          text-xl
          font-bold
          uppercase
        ">

          {workout.name}

        </h3>



        <p className="
          text-gray-400
          mt-1
        ">

          {workout.equipment}

        </p>






        {/* Stats */}

        <div className="
          flex
          flex-wrap
          gap-5
          mt-4
          text-sm
          text-gray-300
        ">


          <span className="flex items-center gap-1">

            <Clock size={16}/>

            {workout.duration} min

          </span>




          <span className="flex items-center gap-1">

            <Flame size={16}/>

            {workout.caloriesBurned} kcal

          </span>




          <span className="flex items-center gap-1">

            <Star size={16}/>

            {workout.rating}

          </span>


        </div>


      </div>








      {/* Actions */}

      <div className="
        flex
        flex-wrap
        gap-2
        justify-center
      ">



        <Link

          href={`/workout/${workout.id}`}

          className="
            btn
            btn-sm
            btn-outline
          "

        >

          View Details

        </Link>





        <button

          onClick={handleDone}

          className="
            btn
            btn-sm
            btn-success
            text-black
          "

        >

          <Check size={16}/>

          Mark Done

        </button>





        <button

          onClick={handleRemove}

          className="
            btn
            btn-sm
            btn-error
          "

        >

          <X size={16}/>

        </button>



      </div>



    </div>

  );

}