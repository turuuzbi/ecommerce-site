"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Page = () => {
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
    <div className="flex flex-col items-center">
      <div className="font-bold text-4xl mt-20">Featured Products</div>
      <div className="text-gray-500 text-2xl mb-30">
        Check out our most popular items that costumers love.
      </div>
      <div className="flex gap-5">
        {cards.map((card) => {
          console.log(cards);
          return (
            <div key={card.id}>
              <Card className="flex w-[350px] p-5">
                <div>
                  <img src={card.images} />
                  <div className="font-bold">{card.title}</div>
                  <div className="text-gray-500">{card.category}</div>
                  <div className="flex justify-between items-center mt-20 mb-10">
                    <div className="font-bold">${card.price}</div>
                    <Button>View details</Button>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <Button className="mt-15">
        <div>View All Products</div>
      </Button>
    </div>
  );
};

export default Page;
