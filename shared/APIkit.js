import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
  },
});

console.log(process.env.NEXT_PUBLIC_BASE_URL);

const APIKit = {
  globalTodo: () => {
    const url = "/todo";
    return client.get(url);
  },
};

export default APIKit;
