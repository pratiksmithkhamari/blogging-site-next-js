"use client";
import React, { useEffect, useState } from "react";

import TableData from "@/components/admincomponents/TableData";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("/api/blog");
    setData(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response?.data?.message)
    fetchData()
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[100%] overflow-y-scroll h-[80vh]">
        <h1 className="text-slate-900 text-xl mt-8 font-semibold w-full">
          All blogs
        </h1>
        <table className="bg-slate-100 w-full sm:w-[85%] mt-3 ">
          <thead>
            <tr className="flex gap-4 justify-around px-6 py-4 items-center uppercase">
              <th scope="col" className="text-slate-900 text-sm ml-4">
                Author
              </th>
              <th scope="col" className="text-slate-900 text-sm">
                Title
              </th>
              <th scope="col" className="text-slate-900 text-sm">
                date
              </th>
              <th scope="col" className="text-slate-900 text-sm">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) => {
                return <TableData key={data?.id} data={data} deleteBlog={deleteBlog}/>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
