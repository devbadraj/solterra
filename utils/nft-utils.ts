import { 
  Metaplex, 
  walletAdapterIdentity,
  bundlrStorage
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import QRCode from 'qrcode';

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

export async function createNFT(
  wallet: any,
  metadata: NFTMetadata
) {
  if (!wallet.connected) {
    throw new Error('Please connect your wallet first');
  }

  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = Metaplex.make(connection)
      .use(walletAdapterIdentity(wallet))
      .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: 'https://api.devnet.solana.com',
        timeout: 60000,
      }));

    // Upload metadata first
    const { uri } = await metaplex.nfts().uploadMetadata({
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      attributes: metadata.attributes,
    });

    // Create NFT with uploaded metadata
    const { nft } = await metaplex.nfts().create({
      uri,
      name: metadata.name,
      sellerFeeBasisPoints: 500,
    });

    return nft;
  } catch (error) {
    console.error("Error creating NFT:", error);
    throw error;
  }
}

export async function generateQRCode(nftData: any): Promise<string> {
  try {
    const qrData = JSON.stringify({
      mint: nftData.address.toString(),
      name: nftData.name,
      uri: nftData.uri,
    });
    
    return await QRCode.toDataURL(qrData);
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw error;
  }
}