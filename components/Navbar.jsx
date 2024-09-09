import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="h-20 border-b-2 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link href={"/"} className="ml-3">
            <Image height={80} width={80} src={"/logo.png"} alt="" />
          </Link>
        </div>
        <div className="flex gap-3 mr-4 font-bold items-center">
          <Link href={"/"}>
            <h2 className="hover:text-red-600">Home</h2>
          </Link>
          <Link href="/aboutus">
            <h2 className="hover:text-red-600">About</h2>
          </Link>
          <Link href="/admin/addblog">
            <button className="border-2 border-slate-300 px-2 py-3 rounded-sm flex gap-2 hover:bg-red-700 hover:text-zinc-100 shadow-md hover:shadow-lg">
              Explore more <MoveRight className="animate-bounce" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
