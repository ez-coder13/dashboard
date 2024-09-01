import React from "react";

function Task1() {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="circle-one rounded-full h-28 w-28 bg-transparent border-[10px] border-orange-400 flex items-center justify-center font-black text-3xl">
          0.10
        </div>
        <div className="circle-two rounded-full h-28 w-28 bg-transparent border-[10px] border-orange-400 flex items-center justify-center font-black text-3xl">
          2.0
        </div>
      </div>
      <div className="flex items-center justify-evenly *:text-sm gap-5 m-2">
        <h1>Active Tasks</h1>
        <h1>Pending Tasks</h1>
      </div>
    </>
  );
}

export default Task1;
