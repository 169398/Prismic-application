

import { DM_Sans } from 'next/font/google'

import { PrismicPreview } from "@prismicio/next";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-DM_Sans',
})
import { repositoryName } from "@/prismicio";
import './global.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='{dmSans variable}' >
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
