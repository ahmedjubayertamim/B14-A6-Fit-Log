import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {

  return (
    <section className="bg-black text-white min-h-[calc(100vh-80px)] flex items-center">

      <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-20
        grid 
        lg:grid-cols-2 
        gap-12 
        items-center
      ">


        {/* Left Content */}
        <div>


          <div className="
            inline-block
            bg-[#ccff00]
            text-black
            px-4
            py-2
            rounded-full
            text-sm
            font-bold
            mb-6
          ">
            WORKOUT LIBRARY
          </div>



          <h1 className="
            text-5xl
            lg:text-7xl
            font-black
            leading-tight
            tracking-tight
          ">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>



          <p className="
            mt-6
            text-gray-400
            text-lg
            max-w-xl
          ">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today's plan, and watch
            the week's work add up.
          </p>



          <a
            href="#library"
            className="
              inline-flex
              items-center
              gap-3
              mt-8
              bg-[#ccff00]
              text-black
              px-6
              py-3
              rounded-full
              font-bold
              hover:scale-105
              transition
            "
          >

            BROWSE WORKOUTS

            <ArrowRight size={20}/>

          </a>


        </div>




        {/* Right Image */}
        <div className="
          flex
          justify-center
        ">

          <Image
    src="/images/banner.png"
   alt="Workout"
  width={650}
  height={650}
  priority
  className="
    object-contain
    scale-110
  "
/>

        </div>


      </div>

    </section>
  );
}