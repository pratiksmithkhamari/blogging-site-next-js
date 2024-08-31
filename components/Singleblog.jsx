import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
const Singleblog = ({ title, description, imgUrl, category,id }) => {
  return (
    <div>
      <motion.div
        className="max-w-[200px] border-2 relative overflow-hidden"
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1,  }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <Link href={`blogs/${id}`}><Image
          src={imgUrl}
          height={200}
          width={200}
          alt="blog image"
          className="max-h-[135px] relative hover:scale-105 transition-all ease-in cursor-pointer"
        /></Link>
        <p className="p-1 rounded-sm absolute top-0 right-0 z-40 bg-red-500 w-fit text-white text-xs ">
          {category}
        </p>
        <div className="p-2">
          <h2 className="text-xl font-bold my-2 line-clamp-2">{title}</h2>
          <p className="text-sm mb-2 line-clamp-3 font-sans" dangerouslySetInnerHTML={{ __html: description }}></p>
          <Link href={`/blogs/${id}`}><Button variant="secondary" className="text-red-700 font-semibold shadow-sm hover:bg-slate-200">
            Read more..
          </Button></Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Singleblog;
