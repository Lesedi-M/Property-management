import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";


export const singlePageLoader = async ({ request, params }) => {
  try {
    const res = await apiRequest.get("/posts/" + params.id);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error('Failed to fetch the post');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Error fetching post: ' + error.message);
  }
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  //const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
   // chatResponse: chatPromise,
  });
};