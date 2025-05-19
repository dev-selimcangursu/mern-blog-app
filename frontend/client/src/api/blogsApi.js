import axios from "axios";

export const getBlogFeatured = async () => {
  let response = await axios.get("http://localhost:5000/blog/get-featured");
  return response;
};
