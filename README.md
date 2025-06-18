# Solterra - Web3 Adventure Game

Solterra is a Next.js-based web3 adventure game where users explore real-world locations, scan QR codes, and claim magical NFT rewards. The project features a medieval fantasy theme, interactive quest maps, wallet integration, and analytics for partners.

---

## Features

- 🌍 **Location-Based Quests:** Discover and interact with real-world locations.
- 🏆 **NFT Rewards:** Scan QR codes to claim unique NFTs and in-game rewards.
- 💼 **Partner Dashboard:** Merchants can manage quests, view analytics, and track check-ins.
- 📊 **Analytics:** Visualize check-in data with interactive charts.
- 🧙 **Medieval Theme:** Custom fonts, glowing text, and grain overlays for an immersive experience.
- 🔐 **Solana Wallet Integration:** Connect Phantom wallet to claim and view NFTs.
- ⚡ **Fast & Modern:** Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

---

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**

   Visit [solterra.quest](solterra.quest) to view the app.

---

## Project Structure

- `app/` - Next.js app directory (pages, layouts, routes)
- `components/` - Reusable UI components (wallet, overlays, cards, etc.)
- `sections/` - Page sections (e.g., Locations, Quests)
- `utils/` - Utility functions (e.g., NFT helpers)
- `public/` - Static assets (images, grain overlays, etc.)

---

## Key Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)
- [Recharts](https://recharts.org/) (for analytics)
- [@metaplex-foundation/umi](https://github.com/metaplex-foundation/umi) (for NFT utilities)

---

## Customization

- **Add Locations:** Edit `sections/Location.tsx` to add or modify quest locations.
- **NFT Logic:** Update `utils/nft-utils.ts` for custom NFT minting or reward logic.
- **Styling:** Modify `globals.css` and Tailwind config for theme changes.
- **Analytics:** Update analytics data in the partners dashboard as needed.

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

## License

MIT

---

## Credits

- Medieval fonts via [Google Fonts](https://fonts.google.com/)
- Grain overlays from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/)
- Solana & Metaplex for blockchain utilities

---

## Contributing

Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

## Disclaimer

This project is for educational and demonstration purposes. Blockchain transactions and NFT minting are simulated or use testnet/devnet only.
