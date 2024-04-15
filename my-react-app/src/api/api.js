// api.js not Api.js so api is just a function, NOT a component(component must start with uppercase name)
import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    // console.log(error.message);
    throw error;
  }
};
