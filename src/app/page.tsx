import AdvantagesSection from '@/components/home/AdvantagesSection';
import CasesSection from '@/components/home/CasesSection';
import HeroSection from '@/components/home/HeroSection';
import TeamSection from '@/components/home/TeamSection';
import PageLayout from '@/components/layout/PageLayout';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background dark:from-primary/20 dark:via-primary/10 dark:to-background" />
        <HeroSection />
      </section>
      
      <PageLayout>
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent sm:text-5xl">
            关于有识AI
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            有识AI（有识之士科技）是一家致力于成为中国领先的人工智能解决方案服务商的公司。公司专注于为C端和B端客户提供高性价比、快速交付的一站式大模型解决方案，帮助客户优化流程成本、提升效率和质量，并最大化业务价值。
          </p>
        </div>

        <div className="space-y-24">
          <TeamSection />
          <AdvantagesSection />
          <CasesSection />
        </div>
      </PageLayout>
    </main>
  );
}
