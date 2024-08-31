"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
const Heading = () => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);

    if (response.data?.success) {
      toast.success("email added successfully");
      setEmail("");
    } else {
      toast.error("error");
    }
  };

  return (
    <div className="text-center mt-12 text-slate-900">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
        className="capitalize text-4xl sm:text-5xl font-bold "
      >
        Get the latest blogs
      </motion.h1>
      <motion.p
        className="w-3/4 mx-auto my-3 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
      >
        Welcome to my Blogging site, your go-to source for the latest in
        technology, lifestyle trends, and startup innovations. Dive into
        insightful articles, expert tips, and inspiring stories that fuel
        creativity, growth, and success in today&apos;s fast-paced world
      </motion.p>

      <form
        onSubmit={handleFormSubmit}
        className="sm:w-3/4 w-full  mx-auto  flex justify-center "
      >
        <div className="flex gap-2 items-center p-2 ">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
