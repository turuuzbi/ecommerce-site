"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "./_components/Product";
import { Header } from "./_components/Header";

const Page = () => {
  const router = useRouter();
  const [cards, setCard] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=4", {
      method: "GET",
    });
    const data = await response.json();
    setCard(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-25">
      <Header></Header>
      <div className="font-bold text-4xl mt-20">Featured Products</div>
      <div className="text-gray-500 text-2xl mb-30">
        Check out our most popular items that costumers love.
      </div>
      <div className="flex gap-5">
        {cards.map((card) => {
          console.log(cards);
          return (
            <Product
              key={card.id}
              cardImage={card.images}
              cardTitle={card.title}
              cardCategory={card.category}
              cardPrice={card.price}
            />
          );
        })}
      </div>
      <Button className="mt-15">
        <div onClick={() => router.push("/products?page=1")}>
          View All Products
        </div>
      </Button>
    </div>
  );
};

export default Page;
