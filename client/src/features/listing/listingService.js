import { Token } from "../../utils/getToken";
import { base_url } from "../../utils/baseUrl";
import axios from "axios";

const addProperty = async (data) => {
  const token = Token();
  try {
    const response = await axios.post(`${base_url}listing/add`, data, {
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

const getPropertiesUser = async () => {
  const token = Token();
  try {
    const response = await axios.get(`${base_url}listing/mylistings`, {
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

const getSingleProperty = async (data) => {
  try {
    const response = await axios.get(`${base_url}listing/${data}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (data) => {
  const token = Token();

  const { id } = data;

  try {
    const response = await axios.delete(`${base_url}listing/delete/${id}`, {
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

const listingService = {
  addProperty,
  getPropertiesUser,
  getSingleProperty,
  deleteItem,
};

export default listingService;
