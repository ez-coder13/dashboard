import React from "react";
import { SiGoogledocs } from "react-icons/si";

function Task7() {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <SiGoogledocs className="text-[80px]" />
        <div className="*:font-extrabold text-lg">
          <h2>Create</h2>
          <h2>Masters</h2>
          <h2>Tasks</h2>
          <h2>Pending</h2>
        </div>
        <div className="rounded-full h-28 w-28 bg-transparent border-[10px] border-orange-400 flex items-center justify-center font-black text-3xl">
          20
        </div>
      </div>
    </>
  );
}

export default Task7;
