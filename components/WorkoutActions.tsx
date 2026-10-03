"use client";

import { Dumbbell, Bookmark } from "lucide-react";
import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";
import { useState } from "react";


export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {


  const {
    addToPlan,
    saveWorkout,
  } = usePlan();



  const [message,setMessage] = useState("");



  function handlePlan(){

    addToPlan(workout);

    setMessage(
      "Added to today's plan"
    );


    setTimeout(()=>{
      setMessage("");
    },2000);

  }



  function handleSave(){

    saveWorkout(workout);

    setMessage(
      "Saved successfully"
    );


    setTimeout(()=>{
      setMessage("");
    },2000);

  }



  return (

    <>


      <div className="
        flex
        flex-wrap
        gap-4
        mt-10
      ">


        <button
          onClick={handlePlan}
          className="
          btn
          btn-primary
          text-black
          font-bold
          "
        >

          <Dumbbell size={18}/>

          Add to today's plan

        </button>



        <button
          onClick={handleSave}
          className="
          btn
          btn-outline
          "
        >

          <Bookmark size={18}/>

          Save for later

        </button>


      </div>




      {
        message && (

          <div className="
            toast
            toast-end
            toast-bottom
          ">

            <div className="
              alert
              alert-success
            ">

              <span>
                {message}
              </span>

            </div>

          </div>

        )
      }



    </>

  );

}