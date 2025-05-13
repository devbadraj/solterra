import { IconWallet } from '@tabler/icons-react';
import { Map, Scroll } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="relative container py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-medievalSharp mb-12 text-center text-4xl font-bold text-gray-100">
          Your Adventure Awaits
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-primary mb-4 flex size-12 items-center justify-center">
              <Map className="text-primary-foreground size-6" />
            </div>
            <h3 className="font-medievalSharp mb-2 text-xl font-bold">
              Magical Quests
            </h3>
            <p className="text-amber-500">
              Discover enchanted locations in the real world and embark on
              quests to earn rewards.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-primary mb-4 flex size-12 items-center justify-center">
              <Scroll className="text-primary-foreground size-6" />
            </div>
            <h3 className="font-medievalSharp mb-2 text-xl font-bold">
              Digital Passport
            </h3>
            <p className="text-amber-500">
              Collect magical stamps and badges in your passport as proof of
              your adventures.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-primary mb-4 flex size-12 items-center justify-center">
              <IconWallet className="text-primary-foreground size-6" />
            </div>
            <h3 className="font-medievalSharp mb-2 text-xl font-bold text-amber-500">
              Mystical Rewards
            </h3>
            <p className="text-amber-500">
              Earn NFTs and SPL tokens with real utility as you complete your
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
