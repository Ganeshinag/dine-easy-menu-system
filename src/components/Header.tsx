
import React from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMenu } from "@/contexts/MenuContext";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const { setSearchTerm } = useMenu();

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
            <div className="h-12 w-auto">
              <img 
                src="/lovable-uploads/262baeff-66b0-4244-b4fe-9f503b38e444.png" 
                alt="Masala Matrix Logo" 
                className="h-full w-auto"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search menu..."
                className="pl-8 w-[200px]"
                onChange={handleSearch}
              />
            </div>
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
