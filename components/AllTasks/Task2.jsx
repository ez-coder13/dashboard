import React, { useState, useEffect } from "react";

function Task2() {
  // Timer state
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("time");
    return savedTime ? Number(savedTime, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  // Memories state
  const [memoryLevel, setMemoryLevel] = useState(() => {
    const savedMemoryLevel = localStorage.getItem("memoryLevel");
    return savedMemoryLevel ? Number(savedMemoryLevel, 10) : 50;
  });

  // Appoints state
  const [appoints, setAppoints] = useState(() => {
    const savedAppoints = localStorage.getItem("appoints");
    return savedAppoints ? Number(savedAppoints, 10) : 0;
  });

  // Timer useEffect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          localStorage.setItem("time", newTime);
          return newTime;
        });
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Save memory level and appoints to localStorage
  useEffect(() => {
    localStorage.setItem("memoryLevel", memoryLevel);
  }, [memoryLevel]);

  useEffect(() => {
    localStorage.setItem("appoints", appoints);
  }, [appoints]);

  // Format time as MM:SS
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="rounded-2xl p-6 flex space-x-4 w-[700px] justify-evenly py-2">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-gray-300 text-lg font-semibold">The Timer</h3>
            <div className="bg-gray-600 w-full h-3 rounded-full">
              <div className="bg-gray-400 h-full w-3/4 rounded-full"></div>
            </div>
            <div className="text-2xl text-gray-200 font-bold">
              {formatTime(time)}
            </div>
            <div className=" flex space-x-4">
              <button
                className={`bg-${
                  isRunning ? "orange-500" : "green-500"
                } text-white px-4 py-1 rounded-lg`}
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? "Pause" : "Start"}
              </button>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded-lg"
                onClick={() => {
                  setIsRunning(false);
                  setTime(0);
                  localStorage.setItem("time", 0);
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-gray-300 text-lg font-semibold">Memories</h3>
            <div className="bg-gray-600 w-full h-3 rounded-full">
              <div
                className="bg-orange-400 h-full rounded-full"
                style={{ width: `${memoryLevel}%` }}
              ></div>
            </div>
            <div className="text-2xl text-orange-400 font-bold">
              {memoryLevel}%
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={memoryLevel}
              onChange={(e) => setMemoryLevel(parseInt(e.target.value, 10))}
              className="mt-4 w-full"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-gray-300 text-lg font-semibold">Appoints</h3>
            <div className="bg-gray-600 w-full h-3 rounded-full">
              <div className="bg-gray-400 h-full w-3/4 rounded-full"></div>
            </div>
            <div className="text-2xl text-orange-500 font-bold">{appoints}</div>
            <div className="flex items-center justify-between space-x-4">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-full"
                onClick={() => setAppoints(appoints + 1)}
              >
                +
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-full"
                onClick={() => setAppoints(appoints > 0 ? appoints - 1 : 0)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task2;
