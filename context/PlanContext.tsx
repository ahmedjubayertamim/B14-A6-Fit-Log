"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types";


interface PlanContextType {

  plan: Workout[];

  saved: Workout[];

  toast: string;

  addToPlan: (workout: Workout) => void;

  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id:number|string)=>void;

  removeFromSaved:(id:number|string)=>void;

  markDone:(id:number|string)=>void;

  showToast:(message:string)=>void;

}

function isWorkout(value: unknown): value is Workout {
  if (!value || typeof value !== "object") {
    return false;
  }

  const workout = value as Record<string, unknown>;

  return (
    (typeof workout.id === "number" ||
      (typeof workout.id === "string" && workout.id.trim() !== "")) &&
    Number.isFinite(Number(workout.id)) &&
    typeof workout.name === "string" &&
    typeof workout.image === "string" &&
    Array.isArray(workout.muscleGroups) &&
    typeof workout.equipment === "string" &&
    typeof workout.difficulty === "string" &&
    typeof workout.duration === "number" &&
    typeof workout.caloriesBurned === "number" &&
    typeof workout.sets === "number" &&
    typeof workout.reps === "string" &&
    typeof workout.rating === "number" &&
    typeof workout.description === "string" &&
    Array.isArray(workout.instructions)
  );
}

function readWorkouts(key: string): Workout[] {
  const stored = localStorage.getItem(key);

  if (!stored) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed)
      ? parsed.filter(isWorkout).map((workout) => ({
          ...workout,
          id: Number(workout.id),
        }))
      : [];
  } catch {
    return [];
  }
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

  const [toast,setToast] = useState("");

  const [hydrated,setHydrated] = useState(false);




  // Load localStorage

  useEffect(()=>{


    startTransition(() => {
      setPlan(readWorkouts("fitlog-plan"));
      setSaved(readWorkouts("fitlog-saved"));
      setHydrated(true);
    });


  },[]);







  // Save plan

  useEffect(()=>{

    if(!hydrated){
      return;
    }

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );

  },[plan, hydrated]);







  // Save saved list

  useEffect(()=>{

    if(!hydrated){
      return;
    }

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );

  },[saved, hydrated]);







  function showToast(message:string){

    setToast(message);


    setTimeout(()=>{

      setToast("");

    },2000);

  }








  // Add today's plan

  function addToPlan(workout:Workout){


    setPlan((previous)=>{


      if(previous.length >= 5){

        showToast(
          "Maximum 5 workouts allowed"
        );

        return previous;

      }



      const exists =
        previous.some(
          item =>
          String(item.id) === String(workout.id)
        );



      if(exists){

        showToast(
          "Already added to plan"
        );

        return previous;

      }



      showToast(
        "Added to today's plan"
      );



      return [
        ...previous,
        workout
      ];


    });


  }









  // Save workout

  function saveWorkout(workout:Workout){


    setSaved((previous)=>{


      const exists =
        previous.some(
          item =>
          String(item.id) === String(workout.id)
        );



      if(exists){

        showToast(
          "Already saved"
        );

        return previous;

      }



      showToast(
        "Saved successfully"
      );



      return [
        ...previous,
        workout
      ];


    });


  }








  function removeFromPlan(id:number|string){


    setPlan((previous)=>

      previous.filter(
        item =>
        String(item.id)!==String(id)
      )

    );


    showToast(
      "Workout removed"
    );


  }








  function removeFromSaved(id:number|string){


    setSaved((previous)=>

      previous.filter(
        item =>
        String(item.id)!==String(id)
      )

    );


    showToast(
      "Saved workout removed"
    );


  }








  function markDone(id:number|string){


    setPlan((previous)=>

      previous.filter(
        item =>
        String(item.id)!==String(id)
      )

    );


    showToast(
      "Workout marked as done"
    );


  }







  return (

    <PlanContext.Provider

      value={{

        plan,

        saved,

        toast,

        addToPlan,

        saveWorkout,

        removeFromPlan,

        removeFromSaved,

        markDone,

        showToast,

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