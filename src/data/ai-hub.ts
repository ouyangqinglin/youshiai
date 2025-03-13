import type { AIModel } from '@/types';

export const aiModels: AIModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    icon: 'brain-circuit',
    description: '最强大的大语言模型，支持复杂的推理和创作任务',
  },
  {
    id: 'claude-3',
    name: 'Claude 3',
    provider: 'Anthropic',
    icon: 'bot',
    description: '具有出色推理能力和知识广度的AI助手',
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    icon: 'sparkles',
    description: 'Google最新的大语言模型，支持多模态交互',
  },
  {
    id: 'llama-2',
    name: 'Llama 2',
    provider: 'Meta',
    icon: 'server',
    description: '开源的大语言模型，支持私有化部署',
  },
];

export const features = [
  {
    title: '多模型支持',
    description: '支持多个主流大语言模型，满足不同场景需求',
    icon: 'layers',
  },
  {
    title: '私有化部署',
    description: '支持模型私有化部署，确保数据安全',
    icon: 'shield',
  },
  {
    title: 'API集成',
    description: '提供标准化的API接口，方便系统集成',
    icon: 'code',
  },
  {
    title: '性能优化',
    description: '针对不同场景进行性能优化，提供最佳体验',
    icon: 'zap',
  },
];
