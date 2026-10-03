"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types";



interface PlanContextType {

  plan: Workout[];

  saved: Workout[];

  addToPlan: (workout: Workout) => void;

  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id:number)=>void;

  removeFromSaved:(id:number)=>void;

  markDone:(id:number)=>void;

}





const PlanContext =
  createContext<PlanContextType | undefined>(undefined);





export function PlanProvider({
  children,
}:{
  children:ReactNode;
}){


  const [plan,setPlan] = useState<Workout[]>([]);

  const [saved,setSaved] = useState<Workout[]>([]);




  // Load data from localStorage

  useEffect(()=>{


    const savedPlan =
      localStorage.getItem("fitlog-plan");


    const savedWorkout =
      localStorage.getItem("fitlog-saved");



    if(savedPlan){

      setPlan(JSON.parse(savedPlan));

    }



    if(savedWorkout){

      setSaved(JSON.parse(savedWorkout));

    }



  },[]);






  // Save plan

  useEffect(()=>{

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );

  },[plan]);






  // Save saved list

  useEffect(()=>{


    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );


  },[saved]);







  // Add today's plan

  function addToPlan(workout:Workout){


    // maximum 5 lifts

    if(plan.length >= 5){

      return;

    }



    const exists =
      plan.some(
        item=>item.id===workout.id
      );


    if(!exists){

      setPlan([
        ...plan,
        workout
      ]);

    }


  }







  // Save workout

  function saveWorkout(workout:Workout){


    const exists =
      saved.some(
        item=>item.id===workout.id
      );


    if(!exists){

      setSaved([
        ...saved,
        workout
      ]);

    }


  }







  // Remove plan item

  function removeFromPlan(id:number){


    setPlan(
      plan.filter(
        item=>item.id!==id
      )
    );


  }







  // Remove saved item

  function removeFromSaved(id:number){


    setSaved(
      saved.filter(
        item=>item.id!==id
      )
    );


  }







  // Mark as done

  function markDone(id:number){


    setPlan(
      plan.filter(
        item=>item.id!==id
      )
    );


  }







  return (

    <PlanContext.Provider

      value={{

        plan,

        saved,

        addToPlan,

        saveWorkout,

        removeFromPlan,

        removeFromSaved,

        markDone,

      }}

    >

      {children}

    </PlanContext.Provider>

  );


}







export function usePlan(){


  const context =
    useContext(PlanContext);



  if(!context){

    throw new Error(
      "usePlan must be used inside PlanProvider"
    );

  }


  return context;


}