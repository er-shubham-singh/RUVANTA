import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile Apps', href: '/services/mobile-development' },
  { name: 'UI/UX Design', href: '/services/ui-ux-design' },
  { name: 'E-commerce', href: '/services/ecommerce' },
  { name: 'API Integration', href: '/services/api-integration' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' }
];

const resources = [
  { name: 'Documentation', href: '#' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Support', href: '/contact' },
  { name: 'Privacy Policy', href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact & Social
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">hello@novaworks.studio</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Innovation Ave<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

<div className="mt-8 pt-8 border-t border-gray-800">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="flex items-center space-x-4">
      <Link
        to="/"
        className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent"
      >
        NovaWorks Studio
      </Link>
    </div>
    <div className="mt-4 md:mt-0 text-center md:text-right">
      <p className="text-gray-400 text-sm">
        © 2025 NovaWorks Studio. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-1">
        Website developed by{" "}
        <a
          href="mailto:shubham.singh7985@gmail.com"
          className="hover:text-white transition-colors font-medium"
        >
          Shubham Singh
        </a>
      </p>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}