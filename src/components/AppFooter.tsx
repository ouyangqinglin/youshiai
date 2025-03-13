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
    <footer className="bg-gray-900 dark:bg-gray-950">
      <Container>
        <div className="py-8">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-500">有识AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive(item.href) ? 'text-blue-400' : 'text-gray-400 hover:text-white'
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
                      ? 'bg-blue-900/50 text-blue-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} 有识AI. 保留所有权利.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
