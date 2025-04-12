
import React, { createContext, useContext, useState, ReactNode } from "react";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
};

type MenuContextType = {
  menuItems: MenuItem[];
  categories: MenuCategory[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredItems: MenuItem[];
};

const defaultMenuContext: MenuContextType = {
  menuItems: [],
  categories: [],
  currentCategory: "all",
  setCurrentCategory: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  filteredItems: [],
};

const MenuContext = createContext<MenuContextType>(defaultMenuContext);

export const useMenu = () => useContext(MenuContext);

// Sample data for the restaurant menu
const sampleMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on our signature crust",
    price: 499,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww",
    category: "veg",
    featured: true,
  },
  {
    id: "2",
    name: "Chicken Tikka Pizza",
    description: "Generous layers of spicy chicken tikka over melted cheese",
    price: 599,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
    category: "non-veg",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine with our house-made dressing, croutons, and parmesan",
    price: 349,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D",
    category: "salads",
  },
  {
    id: "4",
    name: "Pasta Carbonara",
    description: "Creamy egg-based sauce with pancetta and black pepper",
    price: 499,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww",
    category: "italian",
    featured: true,
  },
  {
    id: "5",
    name: "Gulab Jamun",
    description: "Sweet milk solid dumplings, soaked in sugar syrup",
    price: 299,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D",
    category: "chef-specials",
  },
  {
    id: "6",
    name: "Garden Fresh Salad",
    description: "Fresh vegetables, mozzarella, and herbs with balsamic glaze",
    price: 349,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fHww",
    category: "salads",
  },
  {
    id: "7",
    name: "Butter Chicken with Naan",
    description: "Our signature creamy tomato chicken curry with freshly baked naan",
    price: 599,
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fHww",
    category: "non-veg",
  },
  {
    id: "8",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: 149,
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "drinks",
    featured: true,
  }
];

const sampleCategories: MenuCategory[] = [
  {
    id: "all",
    name: "All Items",
    description: "Browse our complete menu"
  },
  {
    id: "veg",
    name: "Vegetarian",
    description: "Plant-based dishes"
  },
  {
    id: "non-veg",
    name: "Non-Vegetarian",
    description: "Meat and seafood specialties"
  },
  {
    id: "chef-specials",
    name: "Chef's Specials",
    description: "Our chef's signature creations"
  },
  {
    id: "italian",
    name: "Italian",
    description: "Authentic Italian cuisine"
  },
  {
    id: "salads",
    name: "Salads",
    description: "Fresh and crisp salads"
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing beverages"
  }
];

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems] = useState<MenuItem[]>(sampleMenuItems);
  const [categories] = useState<MenuCategory[]>(sampleCategories);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Filter menu items based on category and search term
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && (searchTerm === "" || matchesSearch);
  });

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        categories,
        currentCategory,
        setCurrentCategory,
        searchTerm,
        setSearchTerm,
        filteredItems
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
