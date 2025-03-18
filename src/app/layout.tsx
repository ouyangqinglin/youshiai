import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

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
  title: '深圳市有识之士科技有限公司',
  description: 'AI解决方案提供商，专注于AI技术在教育、金融、制造等行业的应用',
  keywords: ['AI教育', '智能教育', '教育科技', '人工智能', '在线教育'],
  authors: [{ name: '有识AI' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <div className="min-h-full bg-background text-foreground transition-colors duration-300">
            <AppNavbar />
            <div className="flex-1">{children}</div>
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
