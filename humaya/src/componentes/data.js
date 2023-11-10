import axios from 'axios';

export const fetchData = async () => {
  const url = "https://api-humaya.onrender.com";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

