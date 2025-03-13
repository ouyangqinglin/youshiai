'use client';

import Link from 'next/link';

import Container from './Container';

interface PageHeroProps {
  title: string;
  description: string;
  variant?: 'solid' | 'outline';
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export default function PageHero({
  title,
  description,
  variant = 'solid',
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative py-20 sm:py-24">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            {title}
          </h1>
          <div className="mt-6 space-y-6 text-lg text-gray-600 dark:text-gray-400">
            <p>{description}</p>
          </div>
          {(cta || secondaryCta) && (
            <div className="mt-8 flex gap-4">
              {cta && (
                <Link
                  href={cta.href}
                  className={
                    variant === 'solid'
                      ? 'inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500'
                      : 'inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50'
                  }
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
