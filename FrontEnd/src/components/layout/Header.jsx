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
import RUVANTA from '../../../public/assets/RUVANTA.jpg'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQ', href: '/faq' }
];

export default function Header() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40"
    >
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                  {/* circular image from public assets - change src if your path differs */}
                  <img
                    src="/assets/RUVANTA.jpg"
                    alt="RUVANTA logo"
                    className="h-10 w-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                    onError={(e) => {
                      // fallback: hide image if not found
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    RUVANTA
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.href
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/40 dark:bg-indigo-900/20'
                        : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
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
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {isDark ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>

                {/* Buttons as Links - use 'as' prop if Button supports it; otherwise wrap in Link */}
                <Button
                  as={Link}
                  to="/contact"
                  variant="secondary"
                  size="sm"
                >
                  Contact
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="sm"
                >
                  Get a Quote
                </Button>
              </div>

              {/* Mobile Actions */}
              <div className="lg:hidden flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {isDark ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
                <Disclosure.Button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
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
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
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
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    close();
                    navigate('/contact');
                  }}
                  className="w-full justify-center"
                >
                  Contact
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    close();
                    navigate('/contact');
                  }}
                  className="w-full justify-center"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
