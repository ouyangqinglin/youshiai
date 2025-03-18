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
            关于有识之士科技
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
          有识之士科技（有识AI）是一家领先的创新型新质生产力企业，致力于在人工智能领域的深度开发与应用。
          </p>
          <p className="mt-6 text-lg text-muted-foreground">公司定位为扎根场景的AI原生服务商，专注为C端客户和B端客户提供高性价比、快速交付的一站式大模型解决方案，旨在通过智能技术的赋能，帮助客户实现流程成本优化、效率质量提升和业务价值最大化。</p>
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
