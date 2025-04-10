
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/contexts/MenuContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="font-bold text-restaurant-primary">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
