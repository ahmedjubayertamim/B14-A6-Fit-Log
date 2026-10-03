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

  toast: string;

  addToPlan: (workout: Workout) => void;

  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id:number|string)=>void;

  removeFromSaved:(id:number|string)=>void;

  markDone:(id:number|string)=>void;

  showToast:(message:string)=>void;

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





  // Load localStorage

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