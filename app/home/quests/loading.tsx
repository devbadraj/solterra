import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        'flex min-h-[400px] items-center justify-center',
        className,
      )}
    >
      <div className="flex space-x-2">
        <span className="bg-primary size-3 animate-bounce rounded-full [animation-delay:-0.3s]" />
        <span className="bg-primary size-3 animate-bounce rounded-full [animation-delay:-0.15s]" />
        <span className="bg-primary size-3 animate-bounce rounded-full" />
      </div>
    </div>
  );
}
