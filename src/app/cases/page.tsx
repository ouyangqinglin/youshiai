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
    image: '/images/cases/case-jinda.avif',
    features: [
      '医美领域的私有化部署方案',
      '面向医美机构开发的智能皮肤的多agent系统'
    ]
  },
  {
    id: 'energy-ai',
    title: '百酷新能源AI充电宝',
    subtitle: '能源科技',
    description: '成立于2015年，专注于新能源领域的研发、生产与销售，致力于提供高效、绿色的能源解决方案。公司主要产品涵盖太阳能光伏发电、储能系统及电池技术，广泛应用于住宅、商业及工业领域。百酷新能源凭借先进的技术研发实力和完善的生产设施，已获得多个国内外认证和专利，产品远销欧美及亚洲市场。',
    image: '/images/cases/case-energy.avif',
    features: [
      '智能行程规划',
      '基于用户指令生成行程',
    ]
  },
  {
    id: 'clothes-ai',
    title: 'AI智能试衣体验',
    subtitle: '智能科技',
    description: 'AI虚拟试衣体验是一款AI驱动的在线试衣平台，用户只需上传个人照片，即可根据选择的衣服查看实时穿搭效果。平台利用可灵AI技术，实现精准的服饰与用户图像匹配，展示真实的穿衣效果。除了图片展示，用户还可生成与之配套的视频，直观感受服饰搭配的动态效果。',
    image: '/images/cases/case-clothes.avif',
    features: [
      '无需实体试衣，即可体验完美穿搭',
      '动态生成高清图片和视频，体验前所未有的试衣体验'
    ]
  },
  {
    id: 'education-ai',
    title: 'AI宝宝英语单词学习神器',
    subtitle: '教育科技',
    description: '宝宝启蒙英语单词学习神器基于Coze平台配置，旨在为孩子们提供个性化的英语学习体验。它能够标记单词学习程度，为每个单词提供详细的中文释义、例句、视频示范和标准发音，并根据孩子的学习情况自动调整学习内容。',
    image: '/images/cases/case-education.avif',
    features: [
      '实时标记单词学习程度',
      '根据孩子学习情况自动调整学习内容'
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
                className={`group ${index % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <div className="relative h-[520px] overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/10 dark:hover:shadow-primary/20">
                  <div className="relative h-[240px]">
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
                  <div className="flex flex-col justify-between h-[280px] p-6">
                    <div>
                      <p className="text-sm text-muted-foreground line-clamp-3">
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
                    </div>
                    <div className="flex items-center">
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
