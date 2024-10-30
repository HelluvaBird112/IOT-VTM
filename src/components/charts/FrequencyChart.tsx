import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { baseURL } from "../../utils/constants";

interface ChartDataItem {
  day: string;
  openCount: number;
  closeCount: number;
}

interface ApiRecord {
  createdAt: string;
  isOpen: boolean;
  _id: string;
}

const FrequencyChart: React.FC<{
  title: string;
  endpoint: string;
  openColor: string;
  closeColor: string;
}> = ({ title, endpoint, openColor, closeColor }) => {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/${endpoint}`);
        const records: ApiRecord[] = await response.json();

        // Get current month's data
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const currentDay = currentDate.getDate();

        const monthData = records.filter((record) => {
          const recordDate = new Date(record.createdAt);
          return (
            recordDate.getMonth() === currentMonth &&
            recordDate.getFullYear() === currentYear
          );
        });

        // Initialize frequencies object for both open and close counts
        const frequencies: {
          [key: string]: {
            openCount: number;
            closeCount: number;
          };
        } = {};

        // Initialize all days with zero counts
        for (let i = 1; i <= currentDay; i++) {
          frequencies[i.toString()] = { openCount: 0, closeCount: 0 };
        }

        // Count frequencies by day and status
        monthData.forEach((record) => {
          const day = new Date(record.createdAt).getDate().toString();
          if (record.isOpen) {
            frequencies[day].openCount++;
          } else {
            frequencies[day].closeCount++;
          }
        });

        // Create array with all days from 1 to current day
        const chartData: ChartDataItem[] = Array.from(
          { length: currentDay },
          (_, index): ChartDataItem => {
            const dayKey = (index + 1).toString();
            return {
              day: `Day ${dayKey}`,
              openCount: frequencies[dayKey].openCount,
              closeCount: frequencies[dayKey].closeCount,
            };
          }
        );

        setData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [endpoint]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        {title} - {new Date().toLocaleString("default", { month: "long" })}
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="openCount"
              fill={openColor}
              name="Open Events"
              stackId="a"
            />
            {/* <Bar
              dataKey="closeCount"
              fill={closeColor}
              name="Close Events"
              stackId="a"
            /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ServoChart = () => {
  return (
    <FrequencyChart
      title="Servo Daily Frequency"
      endpoint="servo"
      openColor="#4CAF50" // Green for open
      closeColor="#F44336" // Red for close
    />
  );
};

export const WaterValveChart = () => {
  return (
    <FrequencyChart
      title="Water Valve Daily Frequency"
      endpoint="waterValve"
      openColor="#2196F3" // Blue for open
      closeColor="#FF9800" // Orange for close
    />
  );
};

export default FrequencyChart;
