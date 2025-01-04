import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchData = async (filter) => {
     const params = new URLSearchParams();

  
  Object.keys(filter).forEach((key) => {
    if (filter[key] !== undefined && filter[key] !== "") {
         params.set(key, filter[key]);
    }
  });

  try {
const response = await axios.get(`/campers`, { params }); 
    console.log("API response:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error.message); 

  }
};