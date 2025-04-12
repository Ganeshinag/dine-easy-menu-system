
import React from "react";
import { useMenu } from "@/contexts/MenuContext";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const FeaturedItems: React.FC = () => {
  const { menuItems } = useMenu();
  const featuredItems = menuItems.filter(item => item.featured);

  if (featuredItems.length === 0) {
    return null;
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-restaurant-primary mb-4 px-4">Featured Items</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1">
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="font-bold text-white text-lg">{item.name}</h3>
                      <p className="text-white/90 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedItems;
