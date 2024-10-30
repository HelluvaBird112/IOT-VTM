import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/auth",
});

export const login = (credentials: { email: string; password: string }) =>
  auth.post("/login", credentials);

export const register = (userData: {
  username: string;
  email: string;
  password: string;
}) => auth.post("/register", userData);
