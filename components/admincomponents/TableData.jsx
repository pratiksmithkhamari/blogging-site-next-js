import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleX } from "lucide-react";
const TableData = ({ title, author, data, deleteBlog }) => {
  return (
    <tr className="flex gap-4 border-b bg-white justify-around items-center font-medium whitespace-nowrap">
      <td className="text-slate-900 text-sm justify-center text-center flex items-center ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className="" />
        </Avatar>
        <h2 className="font-semibold px-6 py-4 mx-auto text-sm text-center">
          {author ? author : "no author"}
        </h2>
      </td>
      <td className="text-slate-900 px-6 py-4 text-sm text-center">
        {data?.title}
      </td>
      <td className="text-slate-900 px-6 py-4 text-sm  w-fit">
        {new Date(data?.date).toDateString()}{" "}
      </td>
      <td className="text-slate-900 px-6 py-4 text-sm ">
        <CircleX
          className="cursor-pointer"
          onClick={() => deleteBlog(data._id)}
        />
      </td>
    </tr>
  );
};

export default TableData;
