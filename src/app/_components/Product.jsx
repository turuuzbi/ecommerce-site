import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Product = (props) => {
  const cardImage = props.cardImage;
  const cardTitle = props.cardTitle;
  const cardCategory = props.cardCategory;
  const cardPrice = props.cardPrice;
  return (
    <div>
      <Card className="flex w-[350px] p-5">
        <div>
          <img src={cardImage[0]} />
          <div className="font-bold">{cardTitle}</div>
          <div className="text-gray-500">{cardCategory}</div>
          <div className="flex justify-between items-center mt-20 mb-10">
            <div className="font-bold">${cardPrice}</div>
            <Button variant="ghost" className="border border-gray-500">
              View details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
