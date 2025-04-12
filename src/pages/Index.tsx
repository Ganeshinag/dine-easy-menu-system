
import React, { useState } from "react";
import { MenuProvider } from "@/contexts/MenuContext";
import Header from "@/components/Header";
import CategoryMenu from "@/components/CategoryMenu";
import MenuGrid from "@/components/MenuGrid";
import FeaturedItems from "@/components/FeaturedItems";
import RestaurantInfo from "@/components/RestaurantInfo";
import Footer from "@/components/Footer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <MenuProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header toggleMobileMenu={toggleMobileMenu} />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          {/* Use full width for all content since sidebar is removed */}
          <div>
            <FeaturedItems />
            
            <div className="sticky top-[73px] bg-gray-50 z-10 py-2">
              <CategoryMenu />
            </div>
            
            <MenuGrid />
          </div>
        </main>
        
        {/* Only show footer on desktop */}
        {!isMobile && <Footer />}
        
        {/* Mobile sidebar */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <div className="py-6 space-y-6">
              <RestaurantInfo />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </MenuProvider>
  );
};

export default Index;
