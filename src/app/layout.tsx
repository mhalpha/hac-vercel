import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import '../helpers/font/stylesheet.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Heart Age App',
  description: 'Calculate your heart age',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
        <GoogleTagManager gtmId="GTM-NG3PJL64" />
      </body>
    </html>
  );
}