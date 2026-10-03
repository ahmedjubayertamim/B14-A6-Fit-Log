import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/utils/api";
import { ArrowLeft, Dumbbell } from "lucide-react";


export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const workout = await getWorkoutById(id);


  // Invalid workout id
  if (!workout) {
    notFound();
  }



  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-16
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        {/* Back Button */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2
            text-gray-400
            hover:text-white
            mb-8
          "
        >

          <ArrowLeft size={18}/>

          Back to workouts

        </Link>





        <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-start
        ">




          {/* LEFT IMAGE */}

          <div
            className="
              bg-[#111]
              rounded-3xl
              p-8
              flex
              justify-center
              items-center
            "
          >

            <Image

              src={workout.image}

              alt={workout.name}

              width={600}

              height={600}

              className="
                object-contain
              "

              priority

            />

          </div>








          {/* RIGHT CONTENT */}

          <div>


            {/* Tags */}

            <div className="
              flex
              flex-wrap
              gap-2
              mb-5
            ">


              {
                workout.muscleGroups.map(
                  (tag:string)=>(
                    
                    <span
                      key={tag}
                      className="
                        badge
                        badge-primary
                        text-black
                        font-bold
                      "
                    >

                      {tag}

                    </span>

                  )
                )
              }


            </div>






            {/* Title */}

            <h1 className="
              text-4xl
              lg:text-5xl
              font-black
              uppercase
            ">

              {workout.name}

            </h1>





            {/* Description */}

            <p className="
              text-gray-400
              text-lg
              mt-5
              leading-relaxed
            ">

              {workout.description}

            </p>







            {/* Specs */}

            <div className="
              mt-8
              bg-[#111]
              rounded-2xl
              p-6
            ">


              <h2 className="
                text-xl
                font-bold
                mb-5
              ">

                KEY SPECS

              </h2>



              <div className="space-y-4">


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







            {/* Instructions */}

            <div className="mt-8">


              <h2 className="
                text-2xl
                font-bold
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
                    (step:string,index:number)=>(

                      <li key={index}>

                        <span className="
                          text-[#ccff00]
                          font-bold
                        ">
                          {index + 1}.
                        </span>

                        {" "}

                        {step}

                      </li>

                    )
                  )
                }


              </ol>


            </div>








            {/* Buttons */}

            <div className="
              flex
              flex-wrap
              gap-4
              mt-10
            ">


              <button
                className="
                  btn
                  btn-primary
                  text-black
                  font-bold
                "
              >

                <Dumbbell size={18}/>

                Add to today's plan

              </button>





              <button
                className="
                  btn
                  btn-outline
                "
              >

                Save for later

              </button>



            </div>




          </div>


        </div>


      </div>


    </main>

  );

}





function Spec({
  label,
  value,
}:{
  label:string;
  value:string | number;
}) {


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

  );

}