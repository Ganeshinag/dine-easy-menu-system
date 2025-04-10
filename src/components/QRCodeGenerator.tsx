
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const QRCodeGenerator: React.FC = () => {
  const menuUrl = window.location.href;
  
  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement;
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "restaurant-menu-qr.png";
      link.href = url;
      link.click();
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-restaurant-primary">Menu QR Code</CardTitle>
        <CardDescription>
          Scan this code with your phone to view our menu
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <QRCodeSVG
            id="qr-code-svg"
            value={menuUrl}
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
          />
          <canvas id="qr-code-canvas" className="hidden"></canvas>
        </div>
        <Button 
          onClick={downloadQRCode}
          className="mt-4 bg-restaurant-tertiary hover:bg-restaurant-tertiary/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
