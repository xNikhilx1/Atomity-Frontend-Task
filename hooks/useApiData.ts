import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=6");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const useApiData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
  });
};
