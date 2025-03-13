import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563EB',
};

export const metadata: Metadata = {
  title: 'AI Hub - Your Gateway to AI Innovation',
  description: 'Explore AI solutions, courses, and case studies at AI Hub.',
  keywords: ['AI教育', '智能教育', '教育科技', '人工智能', '在线教育'],
  authors: [{ name: '有识AI' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed right-4 top-4 z-50">
            <ThemeToggle />
          </div>
          <AppNavbar />
          <div className="flex-1">{children}</div>
          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
