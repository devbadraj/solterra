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
          className="font-medievalSharp"
        >
          <Wallet className="mr-2 h-4 w-4" /> 0x1a2...3b4c
        </Button>
      ) : (
        <Button
          className="font-medievalSharp"
          onClick={handleConnect}
        >
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
    </>
  );
}
