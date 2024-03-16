import { base_url } from "../../utils/baseUrl";
import axios from "axios";

const loginUser = async (data) => {
  
  try {
    const response = await axios.post(`${base_url}auth/login`, data,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


const authService = {loginUser};
export default authService;