import React, { useState } from "react";
import { Pause, Play } from "lucide-react";
import { baseESP32URL } from "../../utils/constants";

export const ServoControl = () => {
  const [isOpen, setIsOpen] = useState(false);

  async function handleServo() {
    console.log(
      "clicked" +
        JSON.stringify({
          isOpen: !isOpen, // Toggle state
        })
    );
    try {
      await fetch(`${baseESP32URL}/servo`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isOpen: !isOpen,
        }),
      });
      console.log("Request sent successfully.");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Servo Control</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-4 bg-gray-200 border border-gray-400 rounded">
          {/* Box lid */}
          <div
            className="absolute w-full h-1/4 bg-blue-500 origin-top-right"
            style={{
              transform: !isOpen ? "rotate(0deg)" : "rotate(90deg)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          {/* Box body */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gray-300 rounded-b" />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              handleServo();
            }}
            className={`flex items-center px-4 py-2 text-white rounded-lg hover:bg-opacity-80 ${
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
    </div>
  );
};
