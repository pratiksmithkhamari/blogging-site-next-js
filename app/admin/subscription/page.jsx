"use client";
import SubsTable from "@/components/admincomponents/SubsTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Page = () => {
  const [email, setEmail] = useState([]);

  const fetchEmail = async () => {
    const response = await axios.get("/api/email");
    if (response.data.success) {
      setEmail(response.data.emailData);
    }
  };

  const handleDelete = async (mongoId) => {
  const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
      if(response.data?.success){
        toast.success(response.data.message)
        fetchEmail()
      }else{
        toast.error("error")
      }
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mt-8 mb-4">All subscriptions</h2>

      {/* Wrapper around the table */}
      <div className="w-[70%] h-[80vh] overflow-y-auto scrollbar-table">
        <table className="min-w-full border">
          <thead className="text-xs font-semibold uppercase bg-slate-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                all subscriptions
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {email &&
              email.map((data) => (
                <SubsTable key={data._id} handleDelete={handleDelete} mongoId={data._id} email={data.email} date={data.date} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
