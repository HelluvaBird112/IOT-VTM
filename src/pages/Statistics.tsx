import React from "react";
import { StatisticsChart } from "../components/charts/StatisticsChart";
import { ServoChart } from "../components/charts/FrequencyChart";
import { WaterValveChart } from "../components/charts/FrequencyChart";

export const Statistics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Statistics</h1>
      <div className="space-y-6">
        <StatisticsChart />
        <ServoChart />
        <WaterValveChart />
      </div>
    </div>
  );
};
