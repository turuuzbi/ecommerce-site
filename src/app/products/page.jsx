"use client";

import { useState, useEffect } from "react";
import { Product } from "../_components/Product";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const pageSize = 12;

const Page = () => {
  const router = useRouter;
  const [productCard, setProductCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);

  const totalPage = Array.from(
    { length: Math.ceil(totalProduct / pageSize) },
    (_, i) => i + 1
  );

  const fetchData = async () => {
    let skip = 0;
    if (currentPage > 1) {
      skip = pageSize * (currentPage - 1);
    }
    const response = await fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setProductCard(data.products);
    setTotalProduct(data.total);
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="flex flex-col m-5 w-screen items-center">
      <div className="max-w-[1500px]">
        <div className="self-start flex mb-5">
          <input
            placeholder="Search here..."
            className="border border-gray-500 rounded-lg"
          />
        </div>
        <div className="flex gap-5 flex-wrap">
          {productCard.map((product) => {
            return (
              <Product
                key={product.id}
                cardImage={product.images}
                cardTitle={product.title}
                cardCategory={product.category}
                cardPrice={product.price}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 m-3">
        {totalPage.map((page) => {
          return (
            <Button
              key={page}
              variant="ghost"
              className="border border-gray-500"
              onClick={() => {
                router.push(`/products?page=${currentPage}`);
                setCurrentPage();
              }}
            >
              {page}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
