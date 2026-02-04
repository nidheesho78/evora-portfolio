'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center text-white/80 hover:text-[#c2b790] transition-colors">
        <Home size={32} />
      </Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <div key={href} className="flex items-center space-x-2">
            <ChevronRight size={16} className="text-white/60" />
            {isLast ? (
              <span className="text-[#c2b790] text-xl font-medium">{label}</span>
            ) : (
              <Link href={href} className="text-white/80 hover:text-[#c2b790] transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}