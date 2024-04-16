// api.js not Api.js so api is just a function, NOT a component(component must start with uppercase name)
import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json", // type of what goes into message body in http request
    // when we make http request we use json (key-value form)
  },
});

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    // console.log(error.message);
    throw error; // error boundaries do not catch errors for async error, thus we must re-throw error
    // to react render. This forces the async error to react render.
  }
};
