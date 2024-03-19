import { base_url } from "../../utils/baseUrl";
import axios from "axios";
import { Token } from "../../utils/getToken";

//updating an existing user information
export const updateUser = async (data) => {
  const token = Token();
  try {
    const response = await axios.post(`${base_url}user`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileImage = async (data) => {
  const token = Token();
  try {
    const response = await axios.post(`${base_url}user/image`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const userService = { updateUser, updateProfileImage };

export default userService;
