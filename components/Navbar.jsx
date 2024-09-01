import React from "react";

function Navbar() {
  return (
    <>
      <nav className="text-black h-12">
        <ul className="flex items-center justify-around">
          <div className="font-extrabold text-2xl cursor-pointer">
            <li>Dashboard</li>
          </div>
          <div className="flex items-center h-12 gap-5 cursor-pointer group">
            <li className="hover:text-orange-500 hover:bg-slate-300 hover:border-b-4 hover:border-orange-500 px-5 py-1">
              Home
            </li>
            <li className="hover:text-orange-500 hover:bg-slate-300 hover:border-b-4 hover:border-orange-500 px-5 py-1">
              Activity
            </li>
            <li className="hover:text-orange-500 hover:bg-slate-300 hover:border-b-4 hover:border-orange-500 px-5 py-1">
              Reports
            </li>
            <li className="hover:text-orange-500 hover:bg-slate-300 hover:border-b-4 hover:border-orange-500 px-5 py-1">
              About Us
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
