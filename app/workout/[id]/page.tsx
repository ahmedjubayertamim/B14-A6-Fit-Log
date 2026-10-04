import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
ArrowLeft
} from "lucide-react";


import {
getWorkoutById
} from "@/utils/api";


import WorkoutActions from "@/components/WorkoutActions";



export default async function WorkoutDetails({

params

}:{

params:Promise<{id:string}>

}){


const {id}=await params;


const workout =
await getWorkoutById(id);



if(!workout){

notFound();

}





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



{/* BACK */}

<Link

href="/"

className="
flex
items-center
gap-2
text-gray-400
hover:text-white
mb-10
"

>

<ArrowLeft size={18}/>

Back to workouts


</Link>





<div className="
grid
lg:grid-cols-2
gap-12
">





{/* IMAGE */}

<div className="
bg-[#111]
rounded-3xl
p-8
flex
items-center
justify-center
border
border-white/10
">


<Image

src={workout.image}

alt={workout.name}

width={600}

height={600}

className="
object-contain
rounded-2xl
"

/>


</div>






{/* CONTENT */}


<div>



{/* TAGS */}

<div className="
flex
gap-2
flex-wrap
mb-5
">


{
workout.muscleGroups.map(tag=>(

<span

key={tag}

className="
bg-[#ccff00]
text-black
px-3
py-1
rounded-full
text-xs
font-bold
"

>

{tag}

</span>


))

}


</div>







<h1 className="
text-5xl
font-black
uppercase
leading-tight
">

{workout.name}


</h1>





<p className="
text-gray-400
mt-5
text-lg
leading-relaxed
">

{workout.description}

</p>






{/* SPECS */}


<div className="
mt-8
bg-[#111]
border
border-white/10
rounded-2xl
p-6
">


<h2 className="
font-black
text-xl
mb-5
">

KEY SPECS

</h2>



<div className="
space-y-4
">


<Spec
label="Equipment"
value={workout.equipment}
/>


<Spec
label="Difficulty"
value={workout.difficulty}
/>


<Spec
label="Sets"
value={workout.sets}
/>


<Spec
label="Reps"
value={workout.reps}
/>


<Spec
label="Duration"
value={`${workout.duration} min`}
/>


<Spec
label="Calories"
value={`${workout.caloriesBurned} kcal`}
/>


<Spec
label="Rating"
value={workout.rating}
/>



</div>


</div>






{/* INSTRUCTIONS */}


<div className="
mt-8
">


<h2 className="
text-2xl
font-black
mb-4
">

INSTRUCTIONS

</h2>



<ol className="
space-y-3
text-gray-300
">


{
workout.instructions.map(
(step,index)=>(

<li
key={index}
>

<span className="
text-[#ccff00]
font-bold
">

{index+1}.

</span>

{" "}

{step}


</li>


)

)

}


</ol>



</div>







<WorkoutActions
workout={workout}
/>



</div>


</div>


</div>


</main>

)

}






function Spec({

label,
value

}:{

label:string;
value:string|number;

}){


return (

<div className="
flex
justify-between
border-b
border-white/10
pb-3
">


<span className="
text-gray-400
">

{label}

</span>


<span className="
font-bold
">

{value}

</span>


</div>

)

}