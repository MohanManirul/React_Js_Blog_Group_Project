import axios from "axios";
import { back_root_url } from "./backApi";

export const getAllCategoriesOfPost = async () => {
  const res = await axios.get(`${back_root_url}/post-categories`);

  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

export const getNewestPost = async () => {
  const res = await axios.get(`${back_root_url}/post-newest`);

  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

export const getPostSByCatId = async (catId) => {
  const res = await axios.get(`${back_root_url}/post-list/${catId}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

export const getPostDetails = async (postId) => {
  const res = await axios.get(`${back_root_url}/post-details/${postId}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};
