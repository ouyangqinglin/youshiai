'use client';

import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import { cases } from '@/data/cases';

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const caseItem = cases.find((c) => c.id === params.id);

  if (!caseItem) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <Image
          src={caseItem.coverImage}
          alt={caseItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <PageLayout>
            <div className="pb-12 pt-20">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {caseItem.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-300">
                {caseItem.description}
              </p>
            </div>
          </PageLayout>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <PageLayout>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 核心功能 */}
            <div className="space-y-8">
              {caseItem.features.map((featureGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="rounded-2xl bg-card p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-foreground">
                    {featureGroup.title}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {featureGroup.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 技术细节 */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">技术细节</h2>
                <div className="mt-6 space-y-4">
                  {caseItem.techDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">效果展示</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="group overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {caseItem.results.title}
              </h3>
              <p className="text-muted-foreground">
                {caseItem.results.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 