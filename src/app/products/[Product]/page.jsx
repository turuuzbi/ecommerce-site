"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [product, setProduct] = useState();
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=4`, {
      method: "GET",
    });
    const data = await response.json();
    setProduct(data.products);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <div>{product}</div>
    </div>
  );
};

export default Page;
