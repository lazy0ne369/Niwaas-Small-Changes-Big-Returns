import { Home } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary/20 p-2 rounded-lg">
        <Home className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xl font-bold text-foreground font-headline">Niwaas Pro</span>
    </Link>
  );
}
