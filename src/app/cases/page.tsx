'use client';

import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { cases } from '@/data/cases';

export default function CasesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 sm:py-24">
        <PageLayout containerClassName="py-0">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="section-title text-5xl sm:text-7xl">
              客户案例
            </h1>
            <p className="section-description">
              探索我们如何帮助客户实现数字化转型，提升业务效率。每个案例都展示了AI技术在不同场景下的实际应用效果。
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Cases Grid */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {cases.map((item, index) => (
              <div
                key={index}
                className="card group hover:border-primary/50"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon name={item.icon} className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                <ul className="mt-6 space-y-2">
                  {item.metrics.map((metric, metricIndex) => (
                    <li
                      key={metricIndex}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <Icon name="check" className="mr-2 size-5 text-green-500" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* CTA Section */}
      {/*<section className="bg-gradient-to-b from-primary to-primary/90 dark:from-primary/90 dark:to-primary">*/}
      {/*  <PageLayout containerClassName="py-24" showBackground={false}>*/}
      {/*    <div className="relative overflow-hidden rounded-2xl bg-white/5 p-16">*/}
      {/*      <div className="absolute left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />*/}
      {/*      <div className="relative mx-auto max-w-2xl text-center">*/}
      {/*        <h2 className="section-title text-white">*/}
      {/*          准备好开始您的AI之旅了吗？*/}
      {/*        </h2>*/}
      {/*        <p className="section-description text-white/80">*/}
      {/*          联系我们，了解如何为您的业务带来AI驱动的创新解决方案。*/}
      {/*        </p>*/}
      {/*        <div className="mt-8 flex justify-center gap-4">*/}
      {/*          <a*/}
      {/*            href="/contact"*/}
      {/*            className="btn-primary bg-white text-primary hover:bg-white/90"*/}
      {/*          >*/}
      {/*            联系我们*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="/solutions"*/}
      {/*            className="btn-secondary bg-white/10 text-white hover:bg-white/20"*/}
      {/*          >*/}
      {/*            了解更多*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </PageLayout>*/}
      {/*</section>*/}
    </main>
  );
}
