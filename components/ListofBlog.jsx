"use client";

import React, { useEffect, useState } from "react";
import Singleblog from "./Singleblog";
import { motion } from "framer-motion";
import axios from "axios";

const ListofBlog = () => {
  const categories = ["All", "technology", "lifestyle", "startup"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchBlogData = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data?.blogs);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false); // Even on error, stop loading
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog?.category === selectedCategory);

  return (
    <div>
      {/* Category selection buttons */}
      <div className="flex items-center justify-center my-12 gap-3">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => handleCategoryChange(item)}
            className={`${
              selectedCategory === item
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-900"
            } text-slate-900 font-sans font-bold rounded-md p-2`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blogs section */}
      <motion.div className="flex flex-wrap justify-center items-center gap-6 mx-auto p-0 sm:p-8">
        {loading ? (
          <div className="text-center">Loading...</div> 
        ) : filterBlogs.length > 0 ? (
          filterBlogs.map((data) => (
            <Singleblog
              key={data._id}
              title={data.title}
              description={data.description}
              category={data.category}
              imgUrl={data?.image}
              id={data._id}
            />
          ))
        ) : (
          <div>No blogs found.</div> 
        )}
      </motion.div>
    </div>
  );
};

export default ListofBlog;
