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

      <p className="text-lg font-normal text-gray-700 leading-7 mb-6">
        {manageId.description}
      </p>

      <section className="prose prose-lg prose-gray mb-6">
        <p>
          Remote work has become a defining characteristic of the modern
          workplace, particularly in the technology sector. With advancements in
          digital communication tools, cloud computing, and collaborative
          platforms, remote work has become not only feasible but also
          advantageous for both employers and employees.
        </p>
        <p>
          The rise of remote work has accelerated in recent years, largely due
          to the COVID-19 pandemic, but the trend shows no signs of slowing
          down. As more companies embrace distributed teams, remote work is
          reshaping the technology sector and redefining workplace culture in
          profound ways.
        </p>
      </section>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Benefits of Remote Work in the Tech Industry
      </h2>

      <ol className="list-decimal pl-4 mb-6 text-gray-700 space-y-4">
        <li className="text-xl font-medium">Access to Global Talent</li>
        <p className="pl-4">
          One of the most significant advantages of remote work for the tech
          industry is the ability to hire talent from anywhere in the world.
        </p>

        <li className="text-xl font-medium">
          How Remote Work is Changing Workplace Culture
        </li>
        <ul className="pl-6 list-disc text-gray-700 space-y-2">
          <li>
            <strong>Shift Toward Outcome-Based Work:</strong> Focus is on
            results rather than hours worked, promoting autonomy and
            responsibility.
          </li>
          <li>
            <strong>Decentralized Workspaces:</strong> Remote and hybrid models
            are fostering inclusivity and flexibility.
          </li>
          <li>
            <strong>Emphasis on Employee Well-Being:</strong> Companies are
            prioritizing wellness programs to prevent burnout.
          </li>
          <li>
            <strong>Diverse and Inclusive Workplaces:</strong> Remote hiring
            enables more diverse teams, allowing access to talent from various
            backgrounds.
          </li>
        </ul>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion:</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Remote work is transforming the technology sector and workplace culture
        by offering greater flexibility, access to global talent, and a shift
        towards outcome-based work. While there are challenges such as
        communication, isolation, and security risks, the benefits often
        outweigh the drawbacks. As remote work continues to evolve, so too will
        the tools, practices, and mindsets that define how we work in the tech
        industry.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mt-3">
        In this new era of work, tech companies that embrace and optimize remote
        work will likely find themselves better positioned to innovate, compete,
        and thrive in an increasingly digital world.
      </p>
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
