import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What services does NovaWorks Studio offer?',
        answer:
          'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, e-commerce solutions, API integrations, cloud & DevOps services, and ongoing maintenance & support.'
      },
      {
        question: 'Do you work with businesses of all sizes?',
        answer:
          'Yes! We work with everyone from startups to Fortune 500 companies. Our flexible approach and multiple service tiers allow us to provide value to businesses at any stage of growth.'
      },
      {
        question: 'Where is NovaWorks Studio located?',
        answer:
          "We're a remote-first company with team members distributed globally. Our headquarters are in San Francisco, CA, but we serve clients worldwide and collaborate seamlessly across time zones."
      },
      {
        question: 'What industries do you specialize in?',
        answer:
          'We have experience across many industries including FinTech, Healthcare, E-commerce, SaaS, Education, and Food & Beverage. Our diverse team brings insights from various sectors to every project.'
      }
    ]
  },
  {
    category: 'Project Process',
    questions: [
      {
        question: 'How do you approach new projects?',
        answer:
          'We follow a proven 5-step process: Discovery (understanding your needs), Design (creating user-centered solutions), Build (development with clean code), Launch (deployment and testing), and Support (ongoing maintenance and updates).'
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'Project timelines vary based on complexity. Simple websites take 2-4 weeks, full web applications 6-12 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during our initial consultation.'
      },
      {
        question: 'Can you work with our existing team?',
        answer:
          'Absolutely! We excel at collaborating with in-house teams, other agencies, and stakeholders. We can integrate with your existing workflows, tools, and processes to ensure seamless collaboration.'
      },
      {
        question: 'Do you provide project management?',
        answer:
          "Yes, every project includes dedicated project management. You'll have a single point of contact who keeps you updated on progress, manages timelines, and ensures clear communication throughout the project."
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What technologies do you use?',
        answer:
          'We use modern, proven technologies including React, Next.js, Node.js, TypeScript, Python, AWS, and more. We choose the best tech stack for each project based on your specific requirements and long-term goals.'
      },
      {
        question: 'Do you build custom solutions or use templates?',
        answer:
          'We build custom solutions tailored to your specific needs. While we may use proven frameworks and libraries as foundations, every project is designed and developed specifically for your business requirements.'
      },
      {
        question: 'How do you ensure code quality?',
        answer:
          'We follow industry best practices including code reviews, automated testing, continuous integration, and comprehensive documentation. All code is written to be maintainable, scalable, and secure.'
      },
      {
        question: 'Can you help with hosting and deployment?',
        answer:
          'Yes, we handle the entire deployment process and can recommend the best hosting solutions for your needs. We also provide ongoing monitoring, backups, and maintenance services.'
      }
    ]
  },
  {
    category: 'Pricing & Support',
    questions: [
      {
        question: 'How do you price your projects?',
        answer:
          'We offer transparent, fixed-price projects based on clearly defined scope and requirements. Pricing varies by complexity: Starter ($5K-15K), Growth ($15K-50K), and Enterprise (custom quotes).'
      },
      {
        question: "What's included in your support?",
        answer:
          'All projects include a support period (1-6 months depending on the plan) covering bug fixes, minor updates, and technical assistance. We also offer ongoing maintenance plans for long-term support.'
      },
      {
        question: 'Do you offer payment plans?',
        answer:
          'Yes, we typically structure payments as 50% upfront, 25% at the midpoint milestone, and 25% upon completion. For larger projects, we can discuss extended payment schedules.'
      },
      {
        question: 'What if I need changes after the project is complete?',
        answer:
          'Minor changes during the support period are included. For larger changes or new features after the project is complete, we provide clear quotes and can prioritize the work based on your needs.'
      }
    ]
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I get started with a project?',
        answer:
          "Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your needs, provide a detailed proposal, and outline the next steps to get your project started."
      },
      {
        question: 'What information do you need to provide a quote?',
        answer:
          'We need to understand your project goals, target audience, key features required, timeline expectations, and budget range. The more details you can provide, the more accurate our initial estimate will be.'
      },
      {
        question: 'Do you sign NDAs?',
        answer:
          'Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. Protecting your intellectual property and business information is a top priority.'
      },
      {
        question: 'How quickly can you start a new project?',
        answer:
          "Our project start times vary based on our current workload and your project's complexity. Typically, we can begin new projects within 1-3 weeks after contract signing. Rush projects may be accommodated with premium pricing."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Find answers to common questions about our services, process, and how we can help transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${category.category}-${questionIndex}`;
                    const isOpen = openItems.includes(itemId);

                    return (
                      <Card key={itemId} className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                        >
                          <span className="text-lg font-medium text-gray-900 dark:text-white">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          )}
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're here to help! Reach out to our team for personalized answers and guidance on your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" as={Link} to="/contact">
                Contact Our Team
              </Button>
              <Button variant="secondary" size="lg" as={Link} to="/services">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-indigo-100">hello@novaworks.studio</p>
              <p className="text-sm text-indigo-200">Response within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-indigo-100">+1 (555) 123-4567</p>
              <p className="text-sm text-indigo-200">Mon-Fri 9AM-6PM PST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-indigo-100">Free 30-min consultation</p>
              <p className="text-sm text-indigo-200">Available worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
