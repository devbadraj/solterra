'use client';

import { useState } from 'react';
import { QRScanner } from '@/components/qr-scanner';
import { CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GrainOverlay } from '@/components/grain-overlay';

interface NFTData {
  imageUrl: string;
  name: string;
  reward: string;
  location: string;
}

const mockLocations = {
  'dubai': 'Dubai Desert Rose',
  'india': 'Taj Mahal Moonstone',
  'toronto': 'CN Tower Starlight',
};

export default function ScanPage() {
  const [lastScanned, setLastScanned] = useState<string | null>(null);
  const [nftData, setNftData] = useState<NFTData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleScan = async (result: string) => {
    try {
      setIsProcessing(true);
      setLastScanned(result);

      // Fetch the HTML content from the scanned URL
      const response = await fetch(result);
      const text = await response.text();

      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      // Find the first image in the page
      const imgElement = doc.querySelector('img');
      const imgUrl = imgElement ? imgElement.src : null;

      if (!imgUrl) {
        throw new Error('No image found at the provided URL');
      }

      // Extract location from the image URL
      const locationKey = new URL(imgUrl).pathname.split('/').pop()?.split('.')[0].toLowerCase() || 'unknown';

      const mockNFTData: NFTData = {
        imageUrl: imgUrl,
        name: mockLocations[locationKey as keyof typeof mockLocations] || 'Mysterious Location NFT',
        reward: '50 SOL',
        location: locationKey.charAt(0).toUpperCase() + locationKey.slice(1),
      };

      setNftData(mockNFTData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error processing QR:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-900/40">
      <GrainOverlay />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <h1 className="font-medievalSharp text-4xl font-bold text-amber-50 drop-shadow-glow">
            Magical NFT Claims
          </h1>
          <p className="mt-2 text-amber-200 text-lg">
            Discover and claim mystical rewards from ancient locations
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg border-2 border-amber-200 bg-amber-100/10 backdrop-blur-sm p-6 shadow-mystical "
          >
            <h2 className="font-medievalSharp mb-4 text-xl text-amber-100 ">
              Enchanted Scanner
            </h2>
            <QRScanner onScan={handleScan} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg border-2 border-amber-200 bg-amber-100/10 backdrop-blur-sm p-6 shadow-mystical"
          >
            <h2 className="font-medievalSharp mb-4 text-xl text-amber-100">
              Mystical Rewards
            </h2>
            
            {isProcessing ? (
              <motion.div 
                className="flex items-center justify-center space-x-2 text-amber-100"
              >
                <Loader2 className="h-8 w-8" />
                <span className="font-medievalSharp">Conjuring your reward...</span>
              </motion.div>
            ) : isSuccess && nftData ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="rounded-lg border border-amber-200 bg-amber-50/10 backdrop-blur-sm p-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mb-4 flex items-center space-x-2 text-emerald-400"
                  >
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-medievalSharp text-lg">Ancient Power Acquired!</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square overflow-hidden rounded-lg border-2 border-amber-200 shadow-glow"
                  >
                    <img 
                      src={nftData.imageUrl} 
                      alt="NFT Preview" 
                      className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-2"
                  >
                    <h3 className="font-medievalSharp text-xl text-amber-100">
                     
                    </h3>
                    <p className="text-amber-200">
                      
                    </p>
                    <p className="text-amber-200">
                      
                    </p>
                  </motion.div>
                </div>

                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(217, 119, 6, 0.4)", "0 0 0 10px rgba(217, 119, 6, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-lg border border-amber-200 bg-emerald-900/30 backdrop-blur-sm p-4"
                >
                  <p className="text-center text-emerald-300 font-medievalSharp">
                    The ancient magic flows through your wallet!
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex h-40 items-center justify-center text-amber-200 font-medievalSharp">
                Await the mystical revelation...
              </div>
            )}
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}