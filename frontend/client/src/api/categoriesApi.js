import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get("http://localhost:5000/categories");
  return response;
};

export const getSubCategories = async ()=>{
    const response = await axios.get("http://localhost:5000/categories/subcategories")
    return response
}


