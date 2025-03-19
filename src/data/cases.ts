import type { Case } from '@/types';

export const cases: Case[] = [
  {
    id: 'medical-ai',
    title: '智能AI医美平台',
    description: '为智能创新科技提供医美领域的私有化部署方 案，使用LoRA框架进行监督微调，结合企业领域数据提升模型表现。',
    icon: 'stethoscope',
    coverImage: '/images/cases/case-jinda.avif',
    client: {
      name: '智能创新科技有限公司',
      description: '成立于2016年，拥有超过50000㎡厂房和600余名员工，具备98台注塑机，是国家级高新技术企业，已通过ISO9001、ISO14001、ISO13485和IATF16949认证。公司年产模具1200套，设置10条成品件生产线，70%业务来自海外市场。专注于汽车、家电、消费电子、医疗及农业设备领域。'
    },
    showcase: [
      {
        image: '/images/cases/medical-res-1.avif',
        title: '智能诊断系统',
        description: '基于AI的医美诊断和分析系统'
      },
      {
        image: '/images/cases/medical-res-2.avif',
        title: '专业医生团队',
        description: '经验丰富的医美专家提供服务'
      },
      {
        image: '/images/cases/medical-res-3.avif',
        title: '先进医疗设备',
        description: '配备顶级医美设备和工具'
      }
    ],
    metrics: [
      '专注汽车、家电、消费电子等领域',
      '结合企业领域数据提升模型表现',
      '实现皮肤检测报告生成与专业咨询问答'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '医美领域的私有化部署方案',
          '面向医美机构开发的智能皮肤的多agent系统',
          '支持私有化部署',
          '实现皮肤检测报告生成与专业咨询问答服务'
        ]
      }
    ],
    techDetails: [
      '使用LoRA框架对预训练模型进行监督微调（SFT）',
      '采用vLLM、DeepSpeed等推理加速框架',
      '应用FP16/INT8模型量化技术',
      '基于Docker和Kubernetes进行模型服务的容器化部署',
      '实施严格的安全策略和权限控制'
    ],
    results: {
      title: '项目成果',
      description: '成功服务50+医美机构，用户满意度达98%，显著提升了医美咨询效率和准确性。'
    }
  },
  {
    id: 'energy-ai',
    title: '百酷新能源AI充电宝',
    description: '为深圳市百酷新能源提供智能充电解决方案，实现多语言交互、智能导航等功能。',
    icon: 'battery-charging',
    coverImage: '/images/cases/case-energy.avif',
    client: {
      name: '百酷新能源AI充电宝',
      description: '深圳市百酷新能源有限公司，成立于2015年，专注于新能源领域的研发、生产与销售，致力于提供高效、绿色的能源解决方案。公司主要产品涵盖太阳能光伏发电、储能系统及电池技术，广泛应用于住宅、商业及工业领域。百酷新能源凭借先进的技术研发实力和完善的生产设施，已获得多个国内外认证和专利，产品远销欧美及亚洲市场。'
    },
    showcase: [
      {
        image: '/images/cases/energy-res-1.jpg',
        title: '智能充电系统',
        description: '自动识别设备类型，智能调节充电参数'
      },
      {
        image: '/images/cases/energy-res-1.jpg',
        title: '多语言交互',
        description: '支持多国语言实时翻译和交互'
      },
      {
        image: '/images/cases/energy-res-1.jpg',
        title: '导航服务',
        description: '智能规划最优充电站路线'
      }
    ],
    metrics: [
      '实时多语言翻译功能',
      '上下文感知对话能力',
      '智能行程规划服务'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '多语言实时翻译',
          '智能路线规划',
          '充电站导航',
          '用户行为分析'
        ]
      }
    ],
    techDetails: [
      '基于Transformer的多语言翻译模型',
      '实时位置服务和路径优化算法',
      '用户行为数据分析和预测',
      '云边协同计算架构',
      '5G网络优化传输'
    ],
    results: {
      title: '项目成果',
      description: '覆盖全国200+城市，服务设备超50万台，系统可用性达99.9%。'
    }
  },
  {
    id: 'clothes-ai',
    title: 'AI驱动的虚拟试衣体验',
    description: '提供AI驱动的在线试衣平台，实现实时穿搭效果展示，支持个性化推荐。',
    icon: 'shirt',
    coverImage: '/images/cases/case-clothes.avif',
    client: {
      name: 'AI智能试衣体验',
      description: 'AI虚拟试衣体验是一款AI驱动的在线试衣平台，用户只需上传个人照片，即可根据选择的衣服查看实时穿搭效果。平台利用可灵AI技术，实现精准的服饰与用户图像匹配，展示真实的穿衣效果。除了图片展示，用户还可生成与之配套的视频，直观感受服饰搭配的动态效果。'
    },
    showcase: [
      {
        image: '/images/cases/closet-res-1.jpg',
        title: '虚拟试衣',
        description: '实时生成穿搭效果'
      },
      {
        image: '/images/cases/closet-res-1.jpg',
        title: '个性推荐',
        description: '基于用户喜好的智能搭配'
      },
      {
        image: '/images/cases/closet-res-1.jpg',
        title: '3D展示',
        description: '多角度展示服装效果'
      }
    ],
    metrics: [
      '支持用户照片上传',
      '精准的服饰与用户图像匹配',
      '生成动态展示视频'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '实时虚拟试衣',
          '个性化穿搭推荐',
          '3D服装展示',
          '社交分享功能'
        ]
      }
    ],
    techDetails: [
      '基于GAN的图像生成技术',
      '3D服装建模和渲染',
      '人体姿态估计算法',
      '基于深度学习的风格迁移',
      '实时渲染优化'
    ],
    results: {
      title: '项目成果',
      description: '累计服务超1000万用户，合作品牌200+，用户评分4.9分。'
    }
  },
  {
    id: 'education-ai',
    title: 'AI宝宝英语单词学习神器',
    description: '宝宝启蒙英语单词学习神器基于Coze平台配置，旨在为孩子们提供个性化的英语学习体验',
    icon: 'shirt',
    coverImage: '/images/cases/case-education.avif',
    client: {
      name: 'AI宝宝英语单词学习神器',
      description: '宝宝启蒙英语单词学习神器基于Coze平台配置，旨在为孩子们提供个性化的英语学习体验。它能够标记单词学习程度，为每个单词提供详细的中文释义、例句、视频示范和标准发音，并根据孩子的学习情况自动调整学习内容。'
    },
    showcase: [
      {
        image: '/images/cases/education-res-1.jpg',
        title: '趣味学习',
        description: '生动有趣的英语学习体验'
      },
      {
        image: '/images/cases/education-res-1.jpg',
        title: '智能互动',
        description: '个性化的学习进度跟踪'
      },
      {
        image: '/images/cases/education-res-1.jpg',
        title: '成果展示',
        description: '直观的学习效果反馈'
      }
    ],
    metrics: [
      '支持用户照片上传',
      '精准的服饰与用户图像匹配',
      '生成动态展示视频'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '输入处理系统',
          '提示词工程系统',
          '对话管理引擎',
          '响应生成系统'
        ]
      }
    ],
    techDetails: [
      '数据持久化',
      '上下文感知的提示词生成',
      '多层级提示词系统',
      '动态提示词组合'
    ],
    results: {
      title: '项目成果',
      description: '累计服务超1000万用户，合作品牌200+，用户评分4.9分。'
    }
  }
];
