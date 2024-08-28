"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { FolderUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateBlogPage = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "technology",
    author: "Pratiksmith Khamari",
    authorImg: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const postData = await axios.post("/api/blog", formData);

    if (postData.data.success) {
      toast.success(postData.data.msg);
      setImage("");
      setData({
        title: "",
        description: "",
        category: "",
        author: "Pratiksmith Khamari",
        authorImg: "",
      });
    } else {
      toast.error("error in posting blog data");
    }
  };
  return (
    <div className="w-full p-4 flex justify-center items-center">
      <form action="" className="sm:w-1/2 w-full" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-xl sm:mt-20 mt-10 text-slate-700">
          Upload a thumbnail
        </h1>

        {/* Image Upload Section */}
        <label htmlFor="thumbnail">
          <div className="flex w-full ">
            {!image && (
              <div className="border-dotted p-2 my-4 border-2 border-slate-700 flex flex-col items-center justify-center cursor-pointer w-24">
                <FolderUp size={32} strokeWidth={1.75} />
                <h2 className="text-slate-500">Upload</h2>
              </div>
            )}
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                height={200}
                width={200}
                className="max-h-[200px] object-cover object-center"
                alt="Uploaded thumbnail"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          onChange={handleImageChange}
          required
          hidden
          className="my-3 ml-12"
        />

        {/* Blog Title */}
        <h2 className="mt-4 mb-2 text-xl font-semibold text-slate-800">
          Blog Title
        </h2>
        <input
          onChange={changeHandler}
          value={data.title}
          type="text"
          name="title"
          placeholder="Type here.."
          className="p-2 w-full sm:w-[400px] border-2"
          required
        />

        {/* Blog Description */}
        <h2 className="mt-4 mb-2 text-xl font-semibold text-slate-800">
          Blog Description
        </h2>
        <textarea
          onChange={changeHandler}
          value={data.description}
          name="description"
          placeholder="Type here.."
          className="p-2 w-full sm:w-[400px] border-2"
          rows={6}
          required
        />

        {/* Blog Category */}
        <h2 className="mt-4 mb-2 text-xl font-semibold text-slate-800">
          Blog Category
        </h2>
        <select
          name="category"
          onChange={changeHandler}
          value={data.category}
       
          className="p-3 border-2 font-semibold text-slate-600"
        >
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="startup">Startup</option>
        </select>

        {/* Submit Button */}
        <div className="flex justify-center mt-5">
          <button className="p-2 rounded-md bg-gray-800 text-zinc-50 w-[100px]">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
