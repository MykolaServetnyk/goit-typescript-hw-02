import axios, { AxiosResponse } from "axios";

const API_KEY = "zyiIFmpsblSLrWrNkxPSPCnekp3cFN53V-2ChI0P66w";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
  likes: number;
  user: {
    name: string;
    [key: string]: any;
  };
  tags: {
    title: string;
    type: string;
  }[];
};

type ApiResponse = {
  results: Image[];
};

export const fetchImages = async (currentPage: number, searchQuery: string): Promise<Image[]> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get("", {
      params: {
        query: searchQuery,
        page: currentPage,
        per_page: 15,
        orientation: "landscape",
        client_id: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
