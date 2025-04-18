
import React from "react";
import { MapPin, Phone, Clock, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Name and Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-restaurant-secondary mb-2">MASALA MATRIX</h2>
            <p className="text-gray-300 text-sm mb-4">Where Flavors Collide</p>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-300">123 Spice Avenue</p>
              <p className="text-gray-300">Flavortown, FM 54321</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
              <div className="flex items-center mt-1">
                <Mail className="h-4 w-4 text-restaurant-secondary mr-2" />
                <p className="text-gray-300">Email: info@masalamatrix.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start">
            <Clock className="h-6 w-6 text-restaurant-secondary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
              <p className="text-gray-300">Mon-Thu: 11AM - 9PM</p>
              <p className="text-gray-300">Fri-Sat: 11AM - 10PM</p>
              <p className="text-gray-300">Sunday: 12PM - 8PM</p>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
