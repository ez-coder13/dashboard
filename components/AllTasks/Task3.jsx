import React from "react";

function Task3() {
  return (
    <>
      <div className="flex items-center justify-around ml-1 my-2">
        <div className="one h-8 w-8 bg-orange-400 rounded-full"></div>
        <span className="mr-10">Time Recorded</span>
      </div>
      <div className="flex items-center justify-around">
        <div className="two h-8 w-8 bg-orange-400 rounded-full"></div>
        <span className="mr-10">Billed Clients</span>
      </div>
    </>
  );
}

export default Task3;
