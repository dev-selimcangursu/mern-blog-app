import axios from "axios";

export const fetAllBlogs = async()=>{
  const response = await axios.get('http://localhost:5000/blog/get-all')
  return response
}

export const getBlogFeatured = async () => {
  let response = await axios.get("http://localhost:5000/blog/get-featured");
  return response;
};

export const getNewestBlog = async () => {
  let response = await axios.get("http://localhost:5000/blog/get-newest");
  return response;
};

export const getEuropeBlog = async()=>{
  let response = await axios.get('http://localhost:5000/blog/get-european')
  return response
}

export const getTurkieBlogs = async()=>{
  let response = await axios.get('http://localhost:5000/blog/get-turkei')
  return response
}