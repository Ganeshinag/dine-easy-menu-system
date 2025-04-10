
import React, { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMenu } from "@/contexts/MenuContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CartView from "@/components/CartView";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const { setSearchTerm, cart } = useMenu();
  const [cartOpen, setCartOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2 md:hidden" 
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-xl font-bold text-restaurant-primary">Bella Cucina</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search menu..."
                className="pl-8 w-[200px]"
                onChange={handleSearch}
              />
            </div>

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-restaurant-primary">
                      {cartItemCount}
                    </Badge>
                  )}
                  <span className="sr-only">Open cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[450px]">
                <SheetHeader>
                  <SheetTitle>Check Cart</SheetTitle>
                </SheetHeader>
                <CartView onClose={() => setCartOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        <div className="mt-4 md:hidden flex relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search menu..."
            className="pl-8 w-full"
            onChange={handleSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
