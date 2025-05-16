'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, X } from 'lucide-react';

export function QRScanner({ onScan }: { onScan: (result: string) => void }) {
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (isScanning && !scannerRef.current) {
      scannerRef.current = new Html5Qrcode("qr-reader");
      
      scannerRef.current.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          onScan(decodedText);
          setIsScanning(false);
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(console.error);
        scannerRef.current = null;
      }
    };
  }, [isScanning, onScan]);

  return (
    <div className="relative">
      {!isScanning ? (
        <button
          onClick={() => setIsScanning(true)}
          className="flex items-center gap-2 rounded-lg border-2 border-amber-200 bg-amber-700 px-4 py-2 font-medievalSharp text-amber-50 hover:bg-amber-800 transition-colors"
        >
          <Camera className="h-5 w-5" />
          Scan QR Code
        </button>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-md rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
            <button
              onClick={() => setIsScanning(false)}
              className="absolute right-2 top-2 rounded-full p-1 text-amber-900 hover:bg-amber-100"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="mb-4 text-center font-medievalSharp text-xl text-amber-900">
              Scan NFT QR Code
            </h3>
            <div id="qr-reader" className="overflow-hidden rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}