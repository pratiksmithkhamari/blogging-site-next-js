"use client";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "@/components/commentsForm/CommenForm";
import CommentList from "@/components/commentsForm/CommentList";

const Page = ({ params }) => {
  const [manageId, setManageId] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch comments when the blog ID changes
  useEffect(() => {
    fetchComments();
  }, [params.id]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?blogId=${params.id}`);
      if (response) {
        const data = await response.json();
        console.log(data.results, "Comments fetched successfully");
        setComments(data.results);
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  // Trigger re-fetching comments when a new comment is added
  const onCommentAdded = async (newComment) => {
    await fetchComments();
  };

  // Fetch blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get("/api/blog", {
        params: {
          id: params.id,
        },
      });
      setManageId(response.data);
    } catch (error) {
      console.error("Failed to fetch blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (!manageId) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const socialIcons = [
    {
      icon: <Instagram />,
      link: "https://instagram.com/pratiksmithkhamari",
      id: 1,
    },
    { icon: <Github />, link: "https://github.com/pratiksmithkhamari", id: 2 },
    {
      icon: <Linkedin />,
      link: "https://linkedin.com/in/pratiksmithkhamari",
      id: 3,
    },
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

      {/* Comment Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <CommentForm blogId={params.id} onCommentAdded={onCommentAdded} />
        <CommentList comments={comments} />{" "}
        {/* Ensure CommentList is rendering correctly */}
      </div>

      {/* Social Media Share Section */}
      <div className="mt-12">
        <h1 className="text-xl capitalize">Share this article</h1>
        <div className="flex">
          {socialIcons.map((item) => (
            <div className="flex gap-3" key={item?.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 flex gap-4 m-2 flex-row text-slate-800"
              >
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
