import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types";


export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {

  return (

    <Link href={`/workout/${workout.id}`}>

      <div className="
        bg-[#111]
        rounded-2xl
        border
        border-white/10
        overflow-hidden
        hover:-translate-y-2
        transition
      ">


        <div className="
          h-60
          flex
          items-center
          justify-center
          bg-black
        ">

          <Image
            src={workout.image}
            alt={workout.name}
            width={250}
            height={250}
            className="object-contain"
          />

        </div>


        <div className="p-5">


          <div className="flex gap-2 flex-wrap mb-3">

            {workout.muscleGroups.map((tag)=>(
              <span
                key={tag}
                className="
                badge
                badge-primary
                text-black
                "
              >
                {tag}
              </span>
            ))}

          </div>


          <h3 className="
            text-xl
            font-bold
            text-white
          ">
            {workout.name}
          </h3>


          <p className="
            text-gray-400
            mt-2
          ">
            {workout.equipment}
          </p>



          <div className="
            flex
            justify-between
            mt-5
            text-sm
          ">


            <span className="flex gap-1">
              <Clock size={16}/>
              {workout.duration} min
            </span>


            <span className="flex gap-1">
              <Flame size={16}/>
              {workout.caloriesBurned}
            </span>


            <span className="flex gap-1">
              <Star size={16}/>
              {workout.rating}
            </span>


          </div>


        </div>


      </div>

    </Link>

  );
}