import axios from "axios";
import { Plus } from "lucide-react";
import React from "react";

const SubsTable = ({ date, email,handleDelete,mongoId }) => {
 

  return (
    <tr className="border-b text-slate-800">
      <td className="px-5 py-3 font-semibold  text-center">
        {email ? email : "No email"}
      </td>
      <td className=" mx-auto text-center">
        {date && new Date(date).toDateString()}{" "}
      </td>
      <td className="pl-28">
        <Plus onClick={()=>handleDelete(mongoId)} className="cursor-pointer rotate-45" />
      </td>
    </tr>
  );
};

export default SubsTable;
