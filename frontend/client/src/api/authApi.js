import axios from "axios";

export const login = async (values) => {
  try {
    let check = await axios.post("http://localhost:5000/auth/login", values);
    return check.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (userData) => {
  try {
    let check = await axios.post(
      "http://localhost:5000/auth/register",
      userData
    );
    return check.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfo = async (newUserData) => {
  try {
    let data = await axios.post("http://localhost:5000/auth/update", newUserData);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
