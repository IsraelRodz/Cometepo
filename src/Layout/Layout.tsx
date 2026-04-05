import { ReactNode } from 'react';
import NavBar from '../Components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <NavBar />

      <main className="pt-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {children}
        </div>
      </main>
    </div>
  );
}