import { Button } from '@/components/ui/button';
import { IconArrowRight, IconWallet } from '@tabler/icons-react';

export default function CallToAction() {
  return (
    <section className="relative container overflow-hidden py-16 text-amber-50">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-medievalSharp mb-6 text-3xl font-bold">
          Ready to Begin Your Adventure?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Connect your wallet and start collecting magical rewards as you
          explore the world around you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>
            <span>Connect Wallet</span>&nbsp;
            <IconWallet className="ml-2 size-5" />
          </Button>
          <Button variant="outline">
            <span>Learn More</span>&nbsp;
            <IconArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
