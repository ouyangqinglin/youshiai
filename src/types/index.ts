export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  icon: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type Case = {
  id: string;
  title: string;
  description: string;
  icon: string;
  metrics: string[];
  coverImage: string;
  features: {
    title: string;
    items: string[];
  }[];
  techDetails: string[];
  results: {
    title: string;
    description: string;
  };
};

export interface Testimonial {
  quote: string;
  user: {
    avatar: string;
    name: string;
    description: string;
  };
}

export interface Scenario {
  icon: string;
  title: string;
  description: string;
  detail: string;
}

export interface SolutionFeature {
  title: string;
  icon: string;
  features: string[];
}

export interface Value {
  number: string;
  unit: string;
  description: string;
}

export interface Solution {
  title: string;
  icon: string;
  description: string;
  videoCover: string;
  videoUrl: string;
  scenarios: Array<{
    icon: string;
    title: string;
    description: string;
    detail: string;
  }>;
  solutions: Array<{
    icon: string;
    title: string;
    features: string[];
  }>;
  values: Value[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  price: string;
  students: number;
  lessons: number;
  features: string[];
  instructor: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  slides: {
    image: string;
    title: string;
    description?: string;
  }[];
  outline: {
    title: string;
    lessons: {
      title: string;
      duration: string;
      description: string;
    }[];
  }[];
  videoUrl: string;
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  icon: 'brain-circuit' | 'bot' | 'sparkles' | 'server';
  description: string;
}

export interface ModelResponse {
  id: string;
  response: string;
  loading: boolean;
  error: string | null;
}
