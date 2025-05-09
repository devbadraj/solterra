'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <>
      {isConnected ? (
        <Button
          variant="outline"
          className="font-medievalSharp border-amber-700 text-amber-700 hover:bg-amber-100"
        >
          <Wallet className="mr-2 h-4 w-4" /> 0x1a2...3b4c
        </Button>
      ) : (
        <Button
          className="font-medievalSharp bg-amber-700 text-amber-50 hover:bg-amber-800"
          onClick={handleConnect}
        >
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
    </>
  );
}
