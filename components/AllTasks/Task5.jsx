import React from "react";

function Task5() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-2xl p-6 w-[700px]">
        <div className="relative flex justify-between">
          <h3 className=" text-2xl font-bold pl-10">Active Tasks</h3>
        </div>

        <div className="mt-[-20px]">
          <div className="h-24 rounded-lg relative overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 50"
            >
              <path
                d="M0 40 Q 20 10, 40 20 T 100 40"
                stroke="orange"
                strokeWidth="2"
                fill="orange"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task5;
