import { ReactNode } from 'react';
import Container from '@/components/ui/Container';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  showBackground?: boolean;
  backgroundClassName?: string;
}

export default function PageLayout({
  children,
  className = '',
  containerClassName = '',
  showBackground = true,
  backgroundClassName = '',
}: PageLayoutProps) {
  return (
    <div className={`relative min-h-fit ${className}`}>
      {showBackground && (
        <div className={`absolute inset-0 -z-10 ${backgroundClassName}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm" />
        </div>
      )}
      <Container className={`py-8 ${containerClassName}`}>
        {children}
      </Container>
    </div>
  );
} 