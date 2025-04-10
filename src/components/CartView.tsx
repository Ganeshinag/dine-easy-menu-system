
import React from "react";
import { useMenu } from "@/contexts/MenuContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CartViewProps {
  onClose?: () => void;
}

const CartView: React.FC<CartViewProps> = ({ onClose }) => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart, cartTotal } = useMenu();

  // GST calculations (assuming 18% total GST - 9% CGST and 9% SGST)
  const gstRate = 0.18;
  const baseAmount = cartTotal / (1 + gstRate);
  const totalGST = cartTotal - baseAmount;
  const cgst = totalGST / 2;
  const sgst = totalGST / 2;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
        <p className="text-sm text-gray-500 mt-1">Add items from the menu to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 mt-4">
        <div className="space-y-4 pr-4">
          {cart.map(item => (
            <div key={item.menuItem.id} className="flex items-start space-x-3">
              <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={item.menuItem.image} 
                  alt={item.menuItem.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{item.menuItem.name}</h4>
                <p className="text-sm text-gray-500 mt-0.5">${item.menuItem.price.toFixed(2)}</p>
                
                <div className="flex items-center mt-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => updateCartItemQuantity(item.menuItem.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => updateCartItemQuantity(item.menuItem.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  
                  <div className="ml-auto">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-gray-500 hover:text-destructive"
                      onClick={() => removeFromCart(item.menuItem.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-sm font-medium">
                  ${(item.menuItem.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="mt-8">
        <Separator className="mb-4" />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span>${baseAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">CGST (9%)</span>
            <span>${cgst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">SGST (9%)</span>
            <span>${sgst.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <span className="text-base font-medium">Total</span>
            <span className="text-base font-bold">${cartTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Button variant="outline" onClick={clearCart} className="w-full">
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

// Import at the top
import { ShoppingCart } from "lucide-react";

export default CartView;
