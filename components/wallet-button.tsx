'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export function WalletButton() {
  return (
    <WalletMultiButton className={`
      font-medievalSharp 
      !bg-amber-700 hover:!bg-amber-800 
      !text-amber-50
      !rounded-lg !px-4 !py-2
      border-2 border-amber-200
    `} />
  );
}