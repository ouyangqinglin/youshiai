import AdvantagesSection from '@/components/home/AdvantagesSection';
import CasesSection from '@/components/home/CasesSection';
import HeroSection from '@/components/home/HeroSection';
import TeamSection from '@/components/home/TeamSection';
import PageLayout from '@/components/layout/PageLayout';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      
      <PageLayout>
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="section-title">
            关于有识AI
          </h2>
          <p className="section-description">
            有识AI（有识之士科技）是一家致力于成为中国领先的人工智能解决方案服务商的公司。公司专注于为C端和B端客户提供高性价比、快速交付的一站式大模型解决方案，帮助客户优化流程成本、提升效率和质量，并最大化业务价值。
          </p>
        </div>

        <div className="space-y-24">
          <TeamSection />
          <AdvantagesSection />
          <CasesSection />
        </div>
      </PageLayout>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 dark:from-primary/90 dark:to-primary">
        <PageLayout containerClassName="py-24">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-16">
            <div className="absolute left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">
                开始您的AI之旅
              </h2>
              <p className="mb-8 text-lg text-white/80">
                立即体验有识AI的强大功能，助力企业数字化转型
              </p>
              <a
                href="/ai-hub"
                className="btn-primary bg-white text-primary hover:bg-white/90"
              >
                免费试用
              </a>
            </div>
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
