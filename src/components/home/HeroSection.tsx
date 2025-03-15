'use client';

import ParticleCanvas from '@/components/ui/ParticleCanvas';
import PageHero from '../ui/PageHero';

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[80vh] items-center">
      <ParticleCanvas />
      <div className="relative z-10 w-full py-20 sm:py-24">
        <PageHero
          title={
            <>
              <span className="relative block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  有识之士科技
                </span>
                <div className="absolute -inset-2 -z-10 animate-pulse-slow rounded-full bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur-2xl" />
              </span>
            </>
          }
          description="致力成为中国领先的人工智能解决方案服务商 - Strive to become a leading provider of artificial intelligence solutions in China"
          cta={{
            label: '立即体验',
            href: '/ai-hub',
          }}
          secondaryCta={{
            label: '了解更多',
            href: '/solutions',
          }}
        />
      </div>
    </div>
  );
}
