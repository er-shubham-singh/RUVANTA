import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$5,000 - $15,000',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    features: [
      'Custom website or landing page',
      'Mobile-responsive design',
      'Basic SEO optimization',
      'Contact forms and analytics',
      '1 month of support',
      'Source code ownership'
    ],
    recommended: false,
    buttonText: 'Get Started',
    timeline: '2-4 weeks'
  },
  {
    name: 'Growth',
    price: '$15,000 - $50,000',
    description: 'Ideal for growing businesses that need comprehensive digital solutions.',
    features: [
      'Full web application or e-commerce store',
      'Custom UI/UX design',
      'Database integration',
      'Payment processing',
      'Admin dashboard',
      'API integrations',
      '3 months of support',
      'Performance optimization',
      'Security implementation'
    ],
    recommended: true,
    buttonText: 'Most Popular',
    timeline: '6-12 weeks'
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    description: 'Comprehensive solutions for large organizations with complex requirements.',
    features: [
      'Multi-platform applications',
      'Advanced integrations',
      'Custom workflows and automations',
      'Dedicated project manager',
      'Priority support',
      'Training and documentation',
      '6+ months of support',
      'Scalable architecture',
      'Compliance and security',
      'Performance monitoring'
    ],
    recommended: false,
    buttonText: 'Contact Sales',
    timeline: '3-6 months'
  }
];

const addOns = [
  {
    name: 'Mobile App Development',
    price: '+$8,000 - $25,000',
    description: 'Native iOS and Android applications'
  },
  {
    name: 'Advanced Analytics',
    price: '+$2,000 - $5,000',
    description: 'Custom dashboards and reporting'
  },
  {
    name: 'Third-party Integrations',
    price: '+$1,000 - $5,000',
    description: 'CRM, marketing tools, and APIs'
  },
  {
    name: 'Ongoing Maintenance',
    price: '$500 - $2,000/month',
    description: 'Updates, monitoring, and support'
  }
];

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Choose the plan that fits your needs. All plans include source code ownership and no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full p-8 relative ${plan.recommended ? 'ring-2 ring-indigo-600' : ''}`}>
                  {plan.recommended && (
                    <Badge variant="info" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {plan.price}
                    </div>
                    <Badge variant="default">{plan.timeline}</Badge>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.recommended ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                    as={Link}
                    to="/contact"
                  >
                    {plan.buttonText}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Extend your project with these popular add-ons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {addon.name}
                    </h3>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {addon.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What's included in the project cost?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All project costs include design, development, testing, deployment, and the specified support period. You'll own all source code and assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How does the payment schedule work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically structure payments as 50% upfront to begin work, 25% at the midpoint milestone, and 25% upon completion and delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I upgrade my plan during development?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We can accommodate scope changes and upgrades throughout the project. We'll provide updated timelines and costs for any additions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What happens after the project is complete?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You'll receive all source code, documentation, and training materials. We offer ongoing maintenance plans and are available for future enhancements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get a detailed proposal tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" as={Link} to="/contact">
                Get Custom Quote
              </Button>
              <Button variant="ghost" size="lg" as={Link} to="/portfolio" className="text-white border-white hover:bg-white hover:text-indigo-600">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}