'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Container from './ui/Container';

const navigation = [
  { name: '首页', href: '/' },
  { name: '解决方案', href: '/solutions' },
  { name: '客户案例', href: '/cases' },
  { name: '课程', href: '/courses' },
  { name: 'AI hub', href: '/ai-hub' }
];

export default function AppFooter() {
  const pathname = usePathname() || '/';

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-card">
      <Container>
        <div className="py-8">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">有识AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center justify-center rounded-lg p-2 text-center text-xs transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} 深圳市有识科技有限公司. 保留所有权利.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
