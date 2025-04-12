
import React from "react";
import { useMenu } from "@/contexts/MenuContext";
import { cn } from "@/lib/utils";
import { ChefHat, LeafyGreen, Beef, Salad, Wine, Utensils } from "lucide-react";

const CategoryMenu: React.FC = () => {
  const { categories, currentCategory, setCurrentCategory } = useMenu();

  // Get icon based on category id
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "veg":
        return <LeafyGreen className="h-4 w-4 mr-1" />;
      case "non-veg":
        return <Beef className="h-4 w-4 mr-1" />;
      case "chef-specials":
        return <ChefHat className="h-4 w-4 mr-1" />;
      case "italian":
        return <Utensils className="h-4 w-4 mr-1" />;
      case "salads":
        return <Salad className="h-4 w-4 mr-1" />;
      case "drinks":
        return <Wine className="h-4 w-4 mr-1" />;
      default:
        return <Utensils className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 p-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center",
              currentCategory === category.id
                ? "bg-restaurant-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {getCategoryIcon(category.id)}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
