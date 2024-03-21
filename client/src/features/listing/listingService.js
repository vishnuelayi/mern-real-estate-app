import { Token } from "../../utils/getToken";

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

  const listingService = { addProperty };

export default listingService;