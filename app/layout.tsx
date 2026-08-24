import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LŪMEN // ÍNDEX',
  description: 'Liquid assets. Luminous returns.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
