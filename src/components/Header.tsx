'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Resources & Blogs', href: '/blog' },
  { label: 'Counseling & Services', href: '/counseling' },
  { label: 'Webinars & Trainings', href: '/webinars' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            🎓 Eagle Scholars
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium" role="navigation" aria-label="Main Navigation">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                pathname === href
                  ? 'text-blue-600 dark:text-blue-300 font-semibold'
                  : 'text-gray-700 dark:text-gray-200'
              )}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle /> {/* ✅ Theme switcher */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-blue-600 hover:border-blue-600 dark:text-gray-200 dark:border-gray-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setMenuOpen((v) => !v);
            }
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white dark:bg-gray-900 text-sm font-medium shadow-md"
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                  pathname === href
                    ? 'text-blue-600 dark:text-blue-300 font-semibold'
                    : 'text-gray-700 dark:text-gray-200'
                )}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
