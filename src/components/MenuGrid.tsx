
import React from "react";
import { useMenu } from "@/contexts/MenuContext";
import MenuItemCard from "./MenuItemCard";

const MenuGrid: React.FC = () => {
  const { filteredItems } = useMenu();

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-600">No items found</h3>
        <p className="text-gray-500 mt-2">Try changing your search or category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;
