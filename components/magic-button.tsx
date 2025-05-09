'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MagicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function MagicButton({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: MagicButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseClasses = cn(
    'relative overflow-hidden font-medievalSharp transition-all duration-300',
    variant === 'default'
      ? 'bg-amber-700 hover:bg-amber-600 text-amber-50'
      : '',
    variant === 'outline'
      ? 'border-amber-700 text-amber-700 hover:bg-amber-100'
      : '',
    variant === 'secondary'
      ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
      : '',
    className,
  );

  return (
    <Button
      variant={variant}
      size={size}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {isHovering && (
        <span
          className="pointer-events-none absolute h-[100px] w-[100px] rounded-full bg-white/20 mix-blend-plus-lighter"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            transform: 'translate(0, 0)',
            opacity: 0.7,
          }}
        />
      )}
      {children}
    </Button>
  );
}
