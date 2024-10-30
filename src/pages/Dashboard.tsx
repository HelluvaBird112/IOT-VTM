import React from "react";
import { ServoControl } from "../components/controls/ServoControl";
import { WaterValveControl } from "../components/controls/WaterValveControl";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServoControl />
        <WaterValveControl />
      </div>
    </div>
  );
};
