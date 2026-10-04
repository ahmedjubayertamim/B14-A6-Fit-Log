"use client";


interface Props{

active:"plan"|"saved";

setActive:
(tab:"plan"|"saved")=>void;

}



export default function MyPlanTabs({
active,
setActive
}:Props){


return (

<div className="
flex
bg-[#111]
border
border-white/10
rounded-xl
p-1
">


<button

onClick={()=>
setActive("plan")
}

className={`
px-5
py-2
rounded-lg
text-sm
font-bold

${
active==="plan"
?
"bg-[#ccff00] text-black"
:
"text-gray-400"
}

`}

>

Today's Plan

</button>



<button

onClick={()=>
setActive("saved")
}

className={`

px-5
py-2
rounded-lg
text-sm
font-bold


${
active==="saved"
?
"bg-[#ccff00] text-black"
:
"text-gray-400"
}

`}

>

Saved

</button>


</div>

)

}