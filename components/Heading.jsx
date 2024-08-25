"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
const Heading = () => {
  return (
    <div className="text-center mt-12 text-slate-900">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} transition={{ease:'easeIn'}}
        className="capitalize text-4xl sm:text-5xl font-bold "
      >
        Get the latest blogs
      </motion.h1>
      <motion.p className="w-3/4 mx-auto my-3 font-sans" initial={{ opacity: 0 }}
        animate={{ opacity: 1, }} transition={{ease:'easeIn',duration:0.6}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi optio
        doloremque vel rerum error expedita dolorum laborum animi praesentium,
        maiores nobis odio quod repellendus, eaque ut provident reprehenderit
        tempora! Recusandae non distinctio assumenda.
      </motion.p>

      <form
        action=""
        className="sm:w-3/4 w-full  mx-auto  flex justify-center "
      >
        <div className="flex gap-2 items-center p-2 ">
          <Input
            placeholder="Enter your email"
            className="sm:w-[400px] w-3/4"
          />
          <Button className="px-5 py-6 ml-2 shadow-md" variant="destructive">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Heading;
