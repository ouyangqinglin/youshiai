'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';

const cases = [
  {
    id: 'medical-ai',
    title: '金大智能AI医美平台',
    subtitle: '医美科技',
    description: '成立于2016年，拥有超过50000㎡厂房和600余名员工，具备98台注塑机，是国家级高新技术企业。已通过ISO9001、ISO14001、ISO13485和IATF16949认证。公司年产模具1200套，设置10条成品件生产线，70%业务...',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&auto=format&fit=crop&q=80',
    features: [
      '医美领域的私有化部署方案',
      '面向医美机构开发的智能皮肤的多agent系统'
    ]
  },
  {
    id: 'education-ai',
    title: '智慧教育解决方案',
    subtitle: '教育科技',
    description: '为全国超过1000所学校提供智能教育解决方案，覆盖K12及高等教育领域。采用先进的AI技术，实现个性化学习和智能教学管理，显著提升教学效果。',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80',
    features: [
      '智能备课系统',
      '个性化学习平台'
    ]
  },
  {
    id: 'finance-ai',
    title: '金融科技解决方案',
    subtitle: '金融科技',
    description: '服务超过200家金融机构，提供智能风控、智能营销、智能客服等全方位解决方案。通过AI技术提升金融服务效率和安全性。',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop&q=80',
    features: [
      '智能风控系统',
      'AI营销决策平台'
    ]
  }
];

export default function CasesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 sm:py-24 dark:from-primary/20 dark:via-primary/10 dark:to-background">
        <div className="absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <PageLayout>
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl"
            >
              客户案例
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl"
            >
              探索我们如何帮助客户实现数字化转型
            </motion.p>
          </div>
        </PageLayout>
      </section>

      {/* Cases Section */}
      <section className="py-16 lg:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {cases.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/10 dark:hover:shadow-primary/20">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="flex h-full flex-col justify-end p-6">
                        <div>
                          <h2 className="text-xl font-bold text-white sm:text-2xl">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-base text-gray-300">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center">
                      <Link
                        href={`/cases/${item.id}`}
                        className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      >
                        查看详情
                        <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
