import { base_url } from "../../utils/baseUrl";
import axios from "axios";

const loginUser = async (data) => {
  
  try {
    const response = await axios.post(`${base_url}auth/login`, data,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const signupUser = async (data) => {
  try {
    const response = await axios.post(`${base_url}auth/signup`, data,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


const authService = {loginUser, signupUser};
export default authService;