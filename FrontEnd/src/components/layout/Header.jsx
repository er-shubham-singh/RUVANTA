import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import RUVANTA from '../../../public/assets/RUVANTA.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Courses', href: '/courses' },
  { name: 'We Worked', href: '/we-worked' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' }
];

export default function Header() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <Disclosure
      as="nav"
      className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-4 mb-4"
    >
      {({ open, close }) => (
        <>
          <div
            className="border border-gray-200/50 dark:border-slate-800 rounded-full px-6 shadow-md dark:shadow-xl w-full transition-all duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(11, 15, 25, 0.5)' : 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div className="flex justify-between items-center h-14">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                  <img
                    src="/assets/RUVANTA.png"
                    alt="RUVANTA logo"
                    className="h-9 w-9  object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-base font-extrabold text-gray-900 dark:text-white tracking-wider uppercase transition-colors">
                    RUVANTA
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all border border-transparent ${location.pathname === item.href
                        ? 'text-indigo-600 dark:text-white bg-indigo-50/80 dark:bg-gray-800 border-indigo-100/50 dark:border-slate-700/60'
                        : 'text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-slate-800/40 hover:border-gray-200/30 dark:hover:border-slate-700/30'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  {isDark ? (
                    <SunIcon className="h-4 w-4" />
                  ) : (
                    <MoonIcon className="h-4 w-4" />
                  )}
                </button>

                <Link
                  to="/contact"
                  className="px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/40 rounded-full transition-all"
                >
                  Contact
                </Link>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 px-5 py-2 text-xs border-none"
                >
                  Get Started →
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="lg:hidden flex items-center space-x-1">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white"
                >
                  {isDark ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
                <Disclosure.Button className="p-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel - slide from left */}
          <Disclosure.Panel
            static
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-50
              ${open ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div className="px-4 pt-4 pb-6 space-y-1 flex flex-col h-full">
              {/* Close button at top */}
              <div className="flex justify-end mb-4">
                <Disclosure.Button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-grow space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={close}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
                      ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/20'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    close();
                    navigate('/contact');
                  }}
                  className="w-full flex items-center justify-center font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 py-2.5 text-sm"
                >
                  Get Started
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
