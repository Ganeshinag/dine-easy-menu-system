
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const RestaurantInfo: React.FC = () => {
  return (
    <Card className="bg-white border-none shadow-sm">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-restaurant-primary mb-1">MASALA MATRIX</h2>
          <p className="text-restaurant-dark text-sm font-medium">Where Flavors Collide</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-restaurant-dark text-sm mb-1">Address</h3>
              <p className="text-gray-600 text-sm">123 Spice Avenue</p>
              <p className="text-gray-600 text-sm">Flavortown, FM 54321</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-restaurant-dark text-sm mb-1">Contact</h3>
              <p className="text-gray-600 text-sm">Phone: (123) 456-7890</p>
              <div className="flex items-center mt-1">
                <Mail className="h-4 w-4 text-restaurant-secondary mr-2" />
                <p className="text-gray-600 text-sm">info@masalamatrix.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-restaurant-dark text-sm mb-1">Opening Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Thu: 11AM - 9PM</p>
              <p className="text-gray-600 text-sm">Fri-Sat: 11AM - 10PM</p>
              <p className="text-gray-600 text-sm">Sun: 12PM - 8PM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
