import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { baseURL } from "../../utils/constants";

export const StatisticsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/statistics`)
      .then((response) => {
        setData(
          response.data.map((item: any) => ({
            time: new Date(item.createdAt).toLocaleTimeString(),
            temperature: item.temperature,
            humidity: item.humidity,
          }))
        );
      })
      .catch((error) =>
        console.error("Error fetching statistics data:", error)
      );
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Temperature & Humidity</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              stroke="#ff7300"
              name="Temperature (°C)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="humidity"
              stroke="#387908"
              name="Humidity (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
