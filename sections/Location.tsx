import { LocationCard } from '@/components/location-card';
import { ParallaxSection } from '@/components/parallax-section';
import { useRouter } from 'next/navigation';

export default function Location() {
  const router = useRouter();

  const handleLocationClick = (id: number) => {
    router.push(`/home/quests?location=${id}`);
  };

  return (
    <section id="quests">
      <ParallaxSection className="container py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-medievalSharp mb-6 text-center text-4xl font-bold text-gray-100">
            Magical Locations
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
            Discover these enchanted places in the real world and collect unique
            rewards on your journey
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <LocationCard
              id={1}
              name="Mystic Garden"
              location="Rare Evo, Las Vegas"
              reward="50 SOL + NFT"
              rarity="Common"
              elevation="320 m"
              imageSrc="/garden.jpeg?height=500&width=300"
              onClick={() => handleLocationClick(1)}
            />
            <LocationCard
              id={2}
              name="Ancient Temple"
              location="Consensus 2025, Toronto"
              reward="100 SOL + Rare NFT"
              rarity="Rare"
              elevation="850 m"
              imageSrc="/temple.jpeg?height=500&width=300"
              onClick={() => handleLocationClick(2)}
            />
            <LocationCard
              id={3}
              name="Dragon's Peak"
              location="Token 2049, Dubai"
              reward="200 SOL + Legendary NFT"
              rarity="Legendary"
              elevation="1,250 m"
              imageSrc="/dragon.jpeg?height=500&width=300"
              onClick={() => handleLocationClick(3)}
            />
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
