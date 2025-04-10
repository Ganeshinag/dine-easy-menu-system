
import React from "react";
import { useMenu } from "@/contexts/MenuContext";
import { cn } from "@/lib/utils";

const CategoryMenu: React.FC = () => {
  const { categories, currentCategory, setCurrentCategory } = useMenu();

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 p-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              currentCategory === category.id
                ? "bg-restaurant-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
