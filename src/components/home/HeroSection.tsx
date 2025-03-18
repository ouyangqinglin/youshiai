'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 pb-24 pt-12 sm:pb-32 sm:pt-16">
      <motion.div
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute inset-0 -z-10"
      >
        <ParticleCanvas />
      </motion.div>

      <PageHero
        title={
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
            有识之士科技
            </span>
          </motion.span>
        }
        description={
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            致力成为中国领先的人工智能解决方案服务商 - Strive to become a leading provider of artificial intelligence solutions in China
          </motion.span>
        }
        cta={{
          label: '了解更多',
          href: '/cases',
          className: 'animate-fade-in-up animation-delay-500'
        }}
      />
    </section>
  );
}
