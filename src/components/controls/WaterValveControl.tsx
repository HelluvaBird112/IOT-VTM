import React, { useState } from "react";
import { Droplets, Pause, Play } from "lucide-react";

export const WaterValveControl = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleValve = () => {
    setIsOpen(!isOpen);
    // Add API call here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Water Valve Control</h2>
      <div className="flex flex-col items-center">
        <div
          className={`w-40 h-40 rounded-full flex items-center justify-center mb-4 ${
            isOpen ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <Droplets
            size={48}
            className={isOpen ? "text-blue-500" : "text-gray-400"}
          />
        </div>

        <button
          onClick={toggleValve}
          className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
            isOpen
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isOpen ? (
            <>
              <Pause className="mr-2" size={20} />
              Close
            </>
          ) : (
            <>
              <Play className="mr-2" size={20} />
              Open
            </>
          )}
        </button>
      </div>
    </div>
  );
};
