
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
    <div className="mt-8">
      <h2 className="text-center text-2xl font-bold text-red-800 mb-6">CHECK OUR YUMMY MENU</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
