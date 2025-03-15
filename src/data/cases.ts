import type { Case } from '@/types';

export const cases: Case[] = [
  {
    id: 'medical-ai',
    title: '金大智能AI医美平台',
    description: '为金大智能创新科技提供医美领域的私有化部署方案，使用LoRA框架进行监督微调，结合企业领域数据提升模型表现。',
    icon: 'stethoscope',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
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
    id: 'education-ai',
    title: '百酷新能源AI充电宝',
    description: '为深圳市百酷新能源提供智能充电解决方案，实现多语言交互、智能导航等功能。',
    icon: 'battery-charging',
    coverImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=60',
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
    id: 'finance-ai',
    title: 'AI驱动的虚拟试衣体验',
    description: '提供AI驱动的在线试衣平台，实现实时穿搭效果展示，支持个性化推荐。',
    icon: 'shirt',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60',
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
  }
];
