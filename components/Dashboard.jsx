import React from "react";
import Task1 from "./AllTasks/Task1";
import Task3 from "./AllTasks/Task3";
import Task4 from "./AllTasks/Task4";
import Task7 from "./AllTasks/Task7";
import Task2 from "./AllTasks/Task2";
import Task8 from "./AllTasks/Task8";
import Task5 from "./AllTasks/Task5";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4 *:place-content-center *:text-center">
        <div className="bg-[#363636] h-40 col-span-2 rounded-xl">
          <Task1 />
        </div>
        <div className="bg-[#363636] h-32 col-span-2 row-span-1 rounded-xl">
          <Task2 />
        </div>

        <div className="bg-[#363636] h-24 col-span-1 rounded-xl">
          <Task3 />
        </div>
        <div className="bg-[#363636] h-24 col-span-1 rounded-xl">
          <Task4 />
        </div>
        <div className="bg-[#363636] h-32 col-span-2 mt-[-30px] rounded-xl">
          <Task5 />
        </div>
        <div className="bg-[#363636] h-32 col-span-2 rounded-xl">
          <Task7 />
        </div>
        <div className="bg-[#363636] h-32 col-span-2 rounded-xl">
          <Task8 />
        </div>
        <div className="bg-[#363636] h-36 col-span-1 w-32 rounded-xl">
          Item 9
        </div>
        <div className="bg-[#363636] h-36 col-span-1 ml-[-95px] rounded-xl">
          Item 10
        </div>

        <div className="bg-[#363636] h-24 col-span-1 rounded-xl">Item 11</div>
        <div className="bg-[#363636] h-24 col-span-1 rounded-xl">Item 12</div>
        <div className="bg-[#363636] h-36 col-span-1 rounded-xl">Item 13</div>
        <div className="bg-[#363636] h-36 col-span-1 rounded-xl">Item 14</div>
        <div className="bg-[#363636] h-48 col-span-2 mt-[-48px] rounded-xl">
          Item 15
        </div>
      </div>
    </>
  );
}

export default Dashboard;
