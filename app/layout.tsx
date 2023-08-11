import './globals.css';
import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import Container from './components/common/Container';

const syne = Syne({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sandeep's Portfolio",
  description: 'Portfolio Website for Sandeep',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          syne.className + ' vsc-initialized bg-dark-base p-3 lg:p-4 w-screen min-h-screen'
        }
      >
        <div className="border w-full h-full border-white">
          <Container>{children}</Container>
        </div>
        </body>
    </html>
  );
}
