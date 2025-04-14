
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/contexts/MenuContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full max-w-[150px] sm:max-w-[180px] aspect-square overflow-hidden rounded-full mb-3 mx-auto">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-gray-600 text-sm my-1 line-clamp-2">{item.description}</p>
      <span className="font-bold text-red-600 mt-1">₹{item.price}</span>
    </div>
  );
};

export default MenuItemCard;
