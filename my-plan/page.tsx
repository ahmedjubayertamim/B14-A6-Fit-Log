"use client";


import Link from "next/link";
import { useState } from "react";

import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";



export default function MyPlan(){


const {
  plan,
  saved
}=usePlan();



const [active,setActive]=useState<
"plan"|"saved"
>("plan");



const currentList =
active==="plan"
? plan
: saved;



const totalMinutes =
plan.reduce(
(sum,item)=>sum+item.duration,
0
);



const totalCalories =
plan.reduce(
(sum,item)=>sum+item.caloriesBurned,
0
);





return (

<main className="
bg-black
min-h-screen
text-white
px-6
py-16
">


<div className="
max-w-7xl
mx-auto
">



<h1 className="
text-6xl
font-black
">

MY PLAN

</h1>



<p className="
text-gray-400
mt-3
">

Cap of five lifts for today. Finish them, then load more.

</p>






{/* Metrics */}

<div className="
grid
md:grid-cols-3
gap-5
mt-10
">


<Metric
title="Exercises"
value={plan.length}
/>


<Metric
title="Minutes"
value={totalMinutes}
/>


<Metric
title="Calories"
value={totalCalories}
/>



</div>







{/* Tabs */}

<div className="
flex
gap-4
mt-12
">


<button

onClick={()=>setActive("plan")}

className={`
px-6
py-3
rounded-full

${
active==="plan"
?
"bg-[#ccff00] text-black"
:
"border border-white/20"
}

`}
>

Today's Plan

</button>




<button

onClick={()=>setActive("saved")}

className={`
px-6
py-3
rounded-full

${
active==="saved"
?
"bg-[#ccff00] text-black"
:
"border border-white/20"
}

`}
>

Saved

</button>



</div>






{/* List */}

<div className="
mt-8
space-y-5
">


{

currentList.length===0 ? (

<div className="
text-center
py-20
">


<h2 className="
text-4xl
font-black
">

NOTHING HERE YET

</h2>


<p className="
text-gray-400
mt-3
">

Browse the library and add a lift to get today moving.

</p>


<Link
href="/"
className="
btn
btn-primary
text-black
mt-6
"
>

Go to workouts

</Link>


</div>


)

:

currentList.map(item=>(

<PlanCard

key={item.id}

workout={item}

/>

))

}


</div>




</div>


</main>

);

}






function Metric({
title,
value
}:{
title:string;
value:number;
}){


return (

<div className="
bg-[#111]
border
border-white/10
rounded-2xl
p-6
">

<p className="text-gray-400">
{title}
</p>


<h3 className="
text-4xl
font-black
mt-2
">

{value}

</h3>


</div>

)

}