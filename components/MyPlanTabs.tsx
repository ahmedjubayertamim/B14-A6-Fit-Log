"use client";

interface MyPlanTabsProps {

  active: "plan" | "saved";

  setActive: (
    tab: "plan" | "saved"
  ) => void;

}


export default function MyPlanTabs({
  active,
  setActive,
}: MyPlanTabsProps) {


  return (

    <div className="
      flex
      gap-4
      mt-12
    ">


      {/* Today's Plan */}

      <button

        onClick={() => setActive("plan")}

        className={`
          px-6
          py-3
          rounded-full
          font-bold
          transition

          ${
            active === "plan"
            ?
            "bg-[#ccff00] text-black"
            :
            "border border-white/20 text-white"
          }

        `}

      >

        Today's Plan

      </button>





      {/* Saved */}

      <button

        onClick={() => setActive("saved")}

        className={`
          px-6
          py-3
          rounded-full
          font-bold
          transition

          ${
            active === "saved"
            ?
            "bg-[#ccff00] text-black"
            :
            "border border-white/20 text-white"
          }

        `}

      >

        Saved

      </button>


    </div>

  );

}