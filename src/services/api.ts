import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getStatistics = () => api.get("/statistics");
export const postServoStatus = (isOpen: boolean) =>
  api.post("/servo", { isOpen });
export const postStatistics = (data: {
  temperature: number;
  humidity: number;
}) => api.post("/statistics", data);
