import { apiKey, apiUrl } from "./URLs";

//Post request for cart
const PostRequestForCart = async (endpoint, data) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };

  try {
    const res = await fetch(`${apiUrl}${endpoint}`, options);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export default PostRequestForCart;
