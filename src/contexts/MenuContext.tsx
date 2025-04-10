
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
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww",
    category: "pizza",
    featured: true,
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Generous layers of pepperoni over melted cheese",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
    category: "pizza",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine with our house-made dressing, croutons, and parmesan",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D",
    category: "salads",
  },
  {
    id: "4",
    name: "Pasta Carbonara",
    description: "Creamy egg-based sauce with pancetta and black pepper",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww",
    category: "pasta",
    featured: true,
  },
  {
    id: "5",
    name: "Tiramisu",
    description: "Coffee-soaked ladyfingers with mascarpone cream",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D",
    category: "desserts",
  },
  {
    id: "6",
    name: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fHww",
    category: "salads",
  },
  {
    id: "7",
    name: "Spaghetti Bolognese",
    description: "Our slow-simmered meat sauce over al dente spaghetti",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fHww",
    category: "pasta",
  },
  {
    id: "8",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "desserts",
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
    id: "pizza",
    name: "Pizza",
    description: "Our signature wood-fired pizzas"
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Handmade pasta dishes"
  },
  {
    id: "salads",
    name: "Salads",
    description: "Fresh and crisp salads"
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats to finish your meal"
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
