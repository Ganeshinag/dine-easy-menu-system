
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar for larger screens - empty now that QR code is removed */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Sidebar content removed */}
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <FeaturedItems />
              
              <div className="sticky top-[73px] bg-gray-50 z-10 py-2">
                <CategoryMenu />
              </div>
              
              <MenuGrid />
            </div>
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
