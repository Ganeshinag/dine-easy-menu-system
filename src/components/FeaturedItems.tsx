
import React from "react";
import { Card } from "@/components/ui/card";

const FeaturedItems: React.FC = () => {
  return (
    <div className="py-6">
      <Card className="overflow-hidden border-none shadow-md">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
          <img
            src="/lovable-uploads/36378257-717c-40c0-bac3-a8155d2c6413.png"
            alt="Restaurant Special Offers"
            className="h-full w-full object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default FeaturedItems;
