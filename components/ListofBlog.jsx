"use client";

import React, { useEffect, useState } from "react";
import Singleblog from "./Singleblog";
import { Button } from "./ui/button";
import { blogData, data } from "@/utils/dummydata";
import { motion } from "framer-motion";
import axios from "axios";
const ListofBlog = () => {
  const categories = ["All", "technology", "lifestyle", "startup"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [blogs, setBlogs] = useState([]);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data?.blogs);
    console.log(response.data.blogs[0]?.image);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // function to managing the state
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // filtering logic of blog

  const filterBlogs =
    selectedCategory == "All"
      ? blogs
      : blogs.filter((blog) => blog?.category == selectedCategory);

  return (
    <div>
      <div className="flex items-center justify-center my-12 gap-3">
        {categories.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => handleCategoryChange(item)}
              className={`${
                selectedCategory == item
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-900"
              } text-slate-900 font-sans font-bold  rounded-md p-2`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap justify-center items-center gap-6  mx-auto">
        {filterBlogs.map((data) => {
          return (
            <Singleblog
              key={data._id}
              title={data.title}
              description={data.description}
              category={data.category}
              imgUrl={data?.image}
              id={data._id}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ListofBlog;
