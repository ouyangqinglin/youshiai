'use client';

import PageHero from '../ui/PageHero';

export default function HeroSection() {
  return (
    <PageHero
      title="有识之士科技"
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
  );
}
