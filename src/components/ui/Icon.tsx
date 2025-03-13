'use client';

import {
  Briefcase,
  Building,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  Play,
  PlayCircle,
  Wrench,
  Users,
  BarChart,
} from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  building: Building,
  'check-circle': CheckCircle,
  clock: Clock,
  code: Code,
  cpu: Cpu,
  play: Play,
  'play-circle': PlayCircle,
  tool: Wrench,
  users: Users,
  'bar-chart': BarChart,
};

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name] || null;
  return IconComponent ? <IconComponent {...props} /> : null;
}
