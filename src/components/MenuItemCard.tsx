
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MenuItem, useMenu } from "@/contexts/MenuContext";
import { useToast } from "@/hooks/use-toast";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useMenu();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

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
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-restaurant-primary hover:bg-restaurant-primary/90 text-white"
        >
          <Plus className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;
