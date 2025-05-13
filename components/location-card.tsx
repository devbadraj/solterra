'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Mountain } from 'lucide-react';

interface LocationCardProps {
  id: number;
  name: string;
  location: string;
  reward: string;
  rarity: 'Common' | 'Rare' | 'Legendary';
  elevation?: string;
  imageSrc: string;
  onClick?: () => void;
}

export function LocationCard({
  id,
  name,
  location,
  reward,
  rarity,
  elevation,
  imageSrc,
  onClick,
}: LocationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const rarityColor =
    rarity === 'Legendary'
      ? 'bg-purple-700'
      : rarity === 'Rare'
        ? 'bg-amber-700'
        : 'bg-green-700';

  return (
    <div
      key={id}
      ref={cardRef}
      className="tilt-card relative aspect-[9/16] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
      style={{
        boxShadow:
          '0 0 0 2px rgba(180, 83, 9, 0.2), 0 0 15px 5px rgba(180, 83, 9, 0.1)',
      }}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Inner border */}
      <div className="tilt-card-content pointer-events-none absolute inset-[6px] rounded-lg border border-amber-200/30" />
      {reward}
      {/* Elevation badge */}
      {elevation && (
        <div className="tilt-card-badge absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-amber-400/90 px-3 py-1.5 text-xs font-bold text-amber-900 shadow-md">
          <Mountain className="h-3.5 w-3.5" />
          {elevation}
        </div>
      )}

      {/* Content gradient */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="tilt-card-gradient p-4 pt-16">
          <Badge
            className={`${rarityColor} font-medievalSharp mb-2 text-amber-50`}
          >
            {rarity}
          </Badge>

          <h3 className="font-medievalSharp tilt-card-title mb-1 text-xl font-bold text-amber-50">
            {name}
          </h3>

          <div className="mb-3 flex items-center text-sm text-amber-200">
            <MapPin className="mr-1 h-3.5 w-3.5" /> {location}
          </div>

          <p className="mb-4 text-sm text-amber-100">
            Discover ancient runes and magical artifacts in this enchanted
            location.
          </p>

          <Button
            onClick={onClick}
            className="font-medievalSharp tilt-card-button w-full bg-amber-500 text-amber-950 hover:bg-amber-400"
          >
            Start Quest <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
