"use client";
import { Github, Instagram, Linkedin } from "lucide-react";
import { blogData } from "@/utils/dummydata";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const [manageId, setManageId] = useState(null);

  // Fetch blog data based on the id from params
  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setManageId(response.data);
    console.log(response.data, "pratik");
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (!manageId) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const socialIcons = [
    { icon: <Instagram />, link: "https://instagram.com/pratiksmithkhamari" },
    { icon: <Github />, link: "https://github.com/pratiksmithkhamari" },
    { icon: <Linkedin />, link: "https://linkedin.com/in/pratiksmithkhamari" },
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center my-8">
        {manageId.title}
      </h1>

      <h2 className="font-semibold text-gray-600 mb-2">
        Posted by: <span className="text-gray-900">Pratiksmith Khamari</span>
      </h2>

      <p className="text-sm font-medium text-gray-500 mb-6">
        Category: <span className="text-blue-600">{manageId.category}</span>
      </p>

      <Image
        src={manageId?.image}
        className="rounded-md max-h-[460px] object-cover w-full mb-6"
        height={600}
        width={1260}
        alt={manageId.title}
      />

      <div
        className="content-blog"
        dangerouslySetInnerHTML={{ __html: manageId.description }}
      ></div>

      <div className="mt-12 ">
        <h1 className="text-xl capitalize">share this article</h1>
        <div className="flex">
          {socialIcons.map((item, i) => {
            return (
              <div className="flex gap-3">
                <a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-zinc-900 flex gap-4 m-2 flex-row text-slate-800"
                >
                  {item.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
