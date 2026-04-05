// src/layouts/Layout.tsx

import { ReactNode } from 'react';
import NavBar from '../Components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <NavBar />
      {/* Espaciador para Navbar fijo */}
      <div className="h-24"></div>
      <main className="px-4 md:px-10 py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto space-y-14 bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
