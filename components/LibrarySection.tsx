"use client";

import { useEffect, useState } from "react";
import { getAllWorkouts } from "@/utils/api";
import { Workout } from "@/types";
import WorkoutCard from "./WorkoutCard";


export default function LibrarySection(){

const [workouts,setWorkouts] = useState<Workout[]>([]);
const [loading,setLoading] = useState(true);


useEffect(()=>{

async function fetchData(){

try{

const data = await getAllWorkouts();

console.log("API DATA:", data);

setWorkouts(data);

}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}

}


fetchData();


},[]);



return (

<section
id="library"
className="
bg-black
text-white
px-6
py-20
"
>


<div className="
max-w-7xl
mx-auto
">


<h2 className="
text-5xl
font-black
">
THE LIBRARY
</h2>


<p className="
text-gray-400
mt-3
">
Twelve lifts covering every major muscle group.
</p>



{
loading ? (

<div className="
flex
justify-center
py-20
">

<span className="
loading
loading-spinner
loading-lg
text-primary
">
</span>

</div>


)

:

(

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
mt-10
">


{
workouts.map((item)=>(

<WorkoutCard
key={item.id}
workout={item}
/>

))
}


</div>

)

}



</div>


</section>

)

}