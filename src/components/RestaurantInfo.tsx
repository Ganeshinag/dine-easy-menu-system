
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const RestaurantInfo: React.FC = () => {
  return (
    <Card className="bg-restaurant-light border-none">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-restaurant-primary mb-2">Bella Cucina</h2>
          <p className="text-restaurant-dark font-medium">Authentic Italian Cuisine</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-restaurant-secondary mr-3" />
            <span className="text-restaurant-dark">123 Pasta Street, Foodville, FC 12345</span>
          </div>
          
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-restaurant-secondary mr-3" />
            <span className="text-restaurant-dark">(123) 456-7890</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-restaurant-secondary mr-3" />
            <div className="text-restaurant-dark">
              <p>Mon-Thu: 11AM - 9PM</p>
              <p>Fri-Sat: 11AM - 10PM</p>
              <p>Sun: 12PM - 8PM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
