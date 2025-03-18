'use client';

import Link from 'next/link';

import Container from './Container';

interface PageHeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: {
    label: string;
    href: string;
    className?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    className?: string;
  };
}

export default function PageHero({
  title,
  description,
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h1 className="relative mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
          <span className="relative inline-block">
            <span className="relative z-10">{title}</span>
            <div className="absolute -inset-1 -z-10 animate-pulse-slow rounded-full bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur-2xl" />
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100 dark:text-gray-300 sm:text-xl">
          {description}
        </p>
        {(cta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {cta && (
              <Link
                href={cta.href}
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${cta.className || ''}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cta.label}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 px-8 py-3 text-lg font-semibold text-gray-900 backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white/5 dark:text-white dark:focus:ring-offset-gray-900 ${secondaryCta.className || ''}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {secondaryCta.label}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
