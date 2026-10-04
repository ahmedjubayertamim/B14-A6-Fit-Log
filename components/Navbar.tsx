"use client";


import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";


import { usePlan } from "@/context/PlanContext";



export default function Navbar(){


const pathname = usePathname();


const {
plan,
saved
}=usePlan();




return (

<header className="
bg-black
text-white
border-b
border-white/10
">


<div className="
max-w-6xl
mx-auto
px-6
py-4
flex
items-center
justify-between
">



{/* LOGO */}

<Link

href="/"

className="
flex
items-center
gap-3
"

>


<Image

src="/images/logo.png"

alt="FitLog"

width={32}

height={32}

/>


<span className="
font-black
tracking-widest
text-xl
">

FITLOG

</span>


</Link>





{/* NAVIGATION */}


<nav className="
hidden
md:flex
items-center
gap-5
">


<Link

href="/"

className={`

px-5
py-2
rounded-full
text-sm
font-bold

${
pathname==="/"

?

"bg-[#ccff00] text-black"

:

"text-gray-400 hover:text-white"

}

`}

>

Workouts

</Link>



<Link

href="/my-plan"

className={`

px-5
py-2
rounded-full
text-sm
font-bold


${
pathname==="/my-plan"

?

"bg-[#ccff00] text-black"

:

"text-gray-400 hover:text-white"

}

`}

>

My Plan

</Link>


</nav>







{/* COUNTERS */}


<div className="
flex
items-center
gap-3
">



<Link href="/my-plan">


<div className="
flex
items-center
gap-2
bg-[#ccff00]
text-black
px-4
py-2
rounded-full
text-sm
font-bold
">


<Dumbbell size={15}/>


Plan {plan.length}


</div>


</Link>






<Link href="/my-plan">


<div className="
px-4
py-2
rounded-full
border
border-white/30
text-sm
font-bold
">


Saved {saved.length}


</div>


</Link>




</div>




</div>


</header>

)

}