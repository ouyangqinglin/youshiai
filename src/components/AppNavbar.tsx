'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme/ThemeToggle';

import Container from './ui/Container';

const navigation = [
  { name: '首页', href: '/' },
  {
    name: '解决方案',
    href: '/solutions',
    submenu: [
      { name: '智能AI医美平台', href: '/solutions/medicine' },
      // { name: '企业级大模型应用定制化开发', href: '/solutions/enterprise-llm' },
      // { name: '轻量级AI应用快速开发', href: '/solutions/lightweight-ai' },
    ],
  },
  { name: '客户案例', href: '/cases' },
  { name: '课程', href: '/courses' },
  { name: 'AI Hub', href: '/ai-hub' },
];

export default function AppNavbar() {
  const pathname = usePathname() || '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="text-primary">欧阳 AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={`relative py-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
                      )}
                    </Link>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
                    )}
                  </Link>
                )}
                {item.submenu && (
                  <div className={`absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out`}>
                    <div className="bg-card/80 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-border/5 py-2 w-[280px] transform origin-top scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                            isActive(subItem.href)
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground hover:pl-6'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">打开菜单</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="flex items-center justify-between rounded-md">
                        <Link
                          href={item.href}
                          className={`flex-1 px-3 py-2 text-base font-medium ${
                            isActive(item.href)
                              ? 'text-primary'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className={`px-3 py-2 text-muted-foreground hover:text-foreground ${
                            isActive(item.href) ? 'text-primary' : ''
                          }`}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      {activeSubmenu === item.name && (
                        <div className="ml-4 space-y-0.5 pt-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
