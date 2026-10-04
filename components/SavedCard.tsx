"use client";


import Image from "next/image";
import Link from "next/link";

import {
Clock,
Flame,
Star,
X
} from "lucide-react";


import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";



export default function SavedCard({
workout
}:{
workout:Workout;
}){


const {
removeFromSaved
}=usePlan();



return (

<div className="
bg-[#111]
border
border-white/10
rounded-2xl
p-4
flex
items-center
gap-5
">


<Image

src={workout.image}

alt={workout.name}

width={120}

height={80}

className="
rounded-xl
object-cover
"

/>



<div className="
flex-1
">


<h3 className="
font-black
uppercase
">

{workout.name}

</h3>


<p className="
text-gray-400
text-sm
">

{workout.equipment}

</p>



<div className="
flex
gap-4
text-xs
mt-2
">


<span>
<Clock size={14}/>
{workout.duration} min
</span>


<span>
<Flame size={14}/>
{workout.caloriesBurned} kcal
</span>


<span>
<Star size={14}/>
{workout.rating}
</span>


</div>


</div>



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

onClick={()=>
removeFromSaved(workout.id)
}

className="
btn
btn-sm
btn-error
"

>

<X size={15}/>

</button>



</div>

)

}