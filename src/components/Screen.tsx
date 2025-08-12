// components/AestheticScreen.tsx
'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

type Props = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  headerSlot?: React.ReactNode; // optional controls under the title
  maxWidth?: string; // e.g. "max-w-6xl"
}>;

export default function AestheticScreen({
  title,
  subtitle,
  headerSlot,
  maxWidth = 'max-w-6xl',
  children
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center px-4 overflow-hidden">
        {(title || subtitle || headerSlot) && (
          <div className={`w-full ${maxWidth} mx-auto mt-16 mb-10`}>
            <div className={`transition-all duration-1000 text-center ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {title && (
                <>
                  <h1 className="font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 animate-pulse">
                    {title}
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full animate-glow" />
                </>
              )}
              {subtitle && <p className="mt-4 text-lg text-gray-300">{subtitle}</p>}
              {headerSlot && <div className="mt-6">{headerSlot}</div>}
            </div>
          </div>
        )}

        {/* Content area */}
        <div className={`w-full ${maxWidth} mx-auto flex-1 overflow-auto pb-12`}>
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
