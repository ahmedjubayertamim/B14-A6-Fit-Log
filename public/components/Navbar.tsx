"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-black text-white border-b border-white/10">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-4">

        {/* Logo Left */}
        <div className="navbar-start">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/images/logo.png"
              alt="FitLog Logo"
              width={42}
              height={42}
              className="object-contain"
            />

            <span className="text-xl font-bold tracking-widest">
              FITLOG
            </span>

          </Link>

        </div>


        {/* Navigation Center */}
        <div className="navbar-center hidden md:flex">

          <ul className="menu menu-horizontal gap-2">

            <li>
              <Link
                href="/"
                className={`
                  rounded-full px-5
                  ${
                    pathname === "/"
                      ? "bg-[#ccff00] text-black font-bold"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                Workout
              </Link>
            </li>


            <li>
              <Link
                href="/my-plan"
                className={`
                  rounded-full px-5
                  ${
                    pathname === "/my-plan"
                      ? "bg-[#ccff00] text-black font-bold"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                My Plan
              </Link>
            </li>

          </ul>

        </div>



        {/* Right Badges */}
        <div className="navbar-end gap-2">

          <Link href="/my-plan">

            <div className="
              flex items-center gap-2
              bg-[#ccff00]
              text-black
              px-4 py-2
              rounded-full
              text-sm
              font-bold
            ">
              <Dumbbell size={16}/>
              Plan 0
            </div>

          </Link>


          <Link href="/my-plan">

            <div className="
              px-4 py-2
              rounded-full
              border border-white/30
              text-sm
              font-semibold
              text-white
            ">
              Saved 0
            </div>

          </Link>

        </div>


      </div>
    </header>
  );
}
