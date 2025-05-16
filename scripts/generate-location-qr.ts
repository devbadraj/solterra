import QRCode from 'qrcode';
import fs from 'fs/promises';
import path from 'path';

async function generateLocationQR(location: string, imageUrl: string) {
  const data = JSON.stringify({
    location,
    imageUrl,
    timestamp: new Date().toISOString()
  });

  const qrCodeDataUrl = await QRCode.toDataURL(data);
  const filePath = path.join(process.cwd(), 'public', 'qr-codes', `${location.toLowerCase().replace(/\s+/g, '-')}.png`);
  
  // Convert base64 to buffer
  const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, "");
  const buffer = Buffer.from(base64Data, 'base64');
  
  // Ensure directory exists
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  
  // Save QR code
  await fs.writeFile(filePath, buffer);
  
  console.log(`Generated QR code for ${location} at ${filePath}`);
}

// Generate QR codes for your locations
async function main() {
  const locations = [
    {
      name: "Dubai Desert Rose",
      imageUrl: "https://your-image-host.com/dubai-nft.png"
    },
    {
      name: "Taj Mahal Moonstone",
      imageUrl: "https://your-image-host.com/india-nft.png"
    },
    {
      name: "CN Tower Starlight",
      imageUrl: "https://your-image-host.com/toronto-nft.png"
    }
  ];

  for (const loc of locations) {
    await generateLocationQR(loc.name, loc.imageUrl);
  }
}

main().catch(console.error);