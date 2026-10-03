"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-black text-white border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <Link 
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/images/logo.png"
            alt="FitLog"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold tracking-widest">
            FITLOG
          </span>

        </Link>



        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className={`
              px-5 py-2 rounded-full
              ${
                pathname === "/"
                ? "bg-[#ccff00] text-black font-bold"
                : "text-gray-300"
              }
            `}
          >
            Workout
          </Link>


          <Link
            href="/my-plan"
            className={`
              px-5 py-2 rounded-full
              ${
                pathname === "/my-plan"
                ? "bg-[#ccff00] text-black font-bold"
                : "text-gray-300"
              }
            `}
          >
            My Plan
          </Link>


        </nav>



        {/* Badges */}
        <div className="flex items-center gap-3">


          <Link href="/my-plan">

            <div
              className="
              flex items-center gap-2
              bg-[#ccff00]
              text-black
              px-4 py-2
              rounded-full
              text-sm
              font-bold
              whitespace-nowrap
              "
            >

              <Dumbbell size={16}/>

              Plan 0

            </div>

          </Link>



          <Link href="/my-plan">

            <div
              className="
              px-4 py-2
              rounded-full
              border border-gray-500
              text-sm
              whitespace-nowrap
              "
            >

              Saved 0

            </div>

          </Link>


        </div>


      </div>

    </header>
  );
}