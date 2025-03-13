import type { Advantage, Case, Feature, TeamMember, Testimonial } from '@/types';

export const features: Feature[] = [
  {
    icon: 'i-lucide-brain-circuit',
    title: '多模型集成',
    description: '支持 ChatGPT、Gemini、Claude 等多个顶级大语言模型，一站式体验不同模型特点',
  },
  {
    icon: 'i-lucide-settings',
    title: '场景化解决方案',
    description: '针对教育、金融、制造等不同行业场景定制化AI应用方案，快速实现业务智能化升级',
  },
  {
    icon: 'i-lucide-shield-check',
    title: '安全可靠',
    description: '企业级数据安全保障，完善的隐私保护机制，确保数据安全与业务合规',
  },
  {
    icon: 'i-lucide-trending-up',
    title: '持续优化',
    description: '定期更新模型能力，持续优化用户体验，提供7*24小时技术支持',
  },
];

export const team: TeamMember[] = [
  {
    name: '何文强',
    title: '创始人兼CEO',
    description: '前腾讯架构师',
    icon: 'i-lucide-user-circle',
  },
  {
    name: '强锋',
    title: '首席科学家&CTO',
    description: '清华大学与香港中文大学FMBA',
    icon: 'i-lucide-graduation-cap',
  },
  {
    name: '巫烨',
    title: '联合创始人',
    description: '资深架构师',
    icon: 'i-lucide-code',
  },
  {
    name: '阳明',
    title: '技术架构师',
    description: '前小米云原生架构师',
    icon: 'i-lucide-cpu',
  },
];

export const advantages: Advantage[] = [
  {
    title: '质量过硬',
    description: '需求匹配度超90%，案例可复用率超80%，交付系统故障率<0.1%',
    icon: 'i-lucide-award',
  },
  {
    title: '高性价比',
    description: '模型压缩技术+算力优化，综合成本降低30%~50%，按效果付费',
    icon: 'i-lucide-trending-down',
  },
  {
    title: '交付迅速',
    description: '90%需求7天内出方案，私有化落地最快3周',
    icon: 'i-lucide-rocket',
  },
  {
    title: '服务妥帖',
    description: '与客户联合打磨方案，提供长期陪伴和技术升级',
    icon: 'i-lucide-handshake',
  },
];

export const cases: Case[] = [
  {
    title: '金大智能AI医美平台',
    description:
      '客户为金大智能创新科技有限公司，专注于汽车、家电、消费电子、医疗及农业设备领域。提供医美领域的私有化部署方案，使用LoRA框架进行监督微调，结合企业领域数据提升模型表现。实现皮肤检测报告生成与专业咨询问答服务。',
    icon: 'i-lucide-stethoscope',
    metrics: ['私有化部署', 'LoRA微调', '专业咨询'],
  },
  {
    title: '百酷新能源AI充电宝',
    description:
      '客户为深圳市百酷新能源有限公司，专注于新能源领域的研发、生产与销售。提供实时多语言翻译、上下文感知对话、智能行程规划等功能。',
    icon: 'i-lucide-battery-charging',
    metrics: ['多语言翻译', '智能对话', '行程规划'],
  },
  {
    title: 'AI驱动的虚拟试衣体验',
    description:
      '提供AI驱动的在线试衣平台，用户上传照片即可查看实时穿搭效果。利用可灵AI技术实现精准的服饰与用户图像匹配，生成动态展示视频。',
    icon: 'i-lucide-shirt',
    metrics: ['实时试衣', '动态展示', '精准匹配'],
  },
  {
    title: 'AI宝宝英语单词学习神器',
    description:
      '基于Coze平台配置，提供个性化的英语学习体验。标记单词学习程度，提供中文释义、例句、视频示范和标准发音，自动调整学习内容。',
    icon: 'i-lucide-book-open',
    metrics: ['个性化学习', '多维教学', '智能调整'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '有识AI帮助我们将客服响应时间缩短了80%，客户满意度显著提升。通过智能化升级，我们的运营效率得到了质的飞跃。',
    user: {
      avatar: '/avatars/user1.jpg',
      name: '张经理',
      description: '某大型制造企业',
    },
  },
  {
    quote:
      '通过有识AI的智能风控解决方案，我们的风险识别准确率提升至95%，极大地提高了业务处理效率。',
    user: {
      avatar: '/avatars/user2.jpg',
      name: '李总监',
      description: '某金融科技公司',
    },
  },
];
