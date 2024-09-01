import React from "react";
import { FaRegUser, FaPen } from "react-icons/fa";

function Task8() {
  return (
    <>
      <h3 className="text-gray-300 text-xl text-start font-semibold mt-2 ml-2">
        Fill Timesheet
      </h3>
      <div className="flex items-center justify-evenly">
        <div>
          <div className="text-5xl text-orange-400 font-bold">0.9.50</div>
          <div className="text-gray-300 text-sm tracking-widest">
            Sed ut perspiciatis
          </div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="bg-transparent rounded-full p-4 w-20 border-[10px] h-20 flex items-center justify-center">
            <span className="text-white text-2xl">
              <FaRegUser />
            </span>
          </div>
          <div className="bg-trasnparent rounded-full p-4 w-20 border-[10px] h-20 flex items-center justify-center">
            <span className="text-white text-2xl">
              <FaPen />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task8;
