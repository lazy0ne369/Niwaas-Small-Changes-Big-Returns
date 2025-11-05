import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Inter, Lexend } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Niwaas Pro - Add Value to Indian Homes',
  description: 'A personalized home improvement platform designed to help Indian middle-class homeowners understand, plan, and increase their property’s market value.',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-headline',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans", inter.variable, lexend.variable)}>
        <FirebaseClientProvider>
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
