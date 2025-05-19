import axios from "axios";

export const getAboutInfo = async () => {
  let response = await axios.get("http://localhost:5000/about");
  return response;
};
