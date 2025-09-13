import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import { services } from '../data/services';

// Redux actions (classic)
import { submitContact, resetContact } from '../Redux/contact/action';

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: '<10k', label: 'Less than $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k+', label: '$100,000+' }
];

const serviceOptions = [
  { value: '', label: 'Select service of interest' },
  ...services.map(service => ({ value: service.id, label: service.title }))
];

export default function Contact() {
  const dispatch = useDispatch();

  // local form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  });

  // Redux state
  const contactState = useSelector((state) => state.contact);
  const { loading, success, error, data } = contactState || { loading: false, success: false, error: null };

  // handle field changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // submit handler - dispatch redux thunk
  const handleSubmit = (e) => {
    e.preventDefault();
    // basic client guard
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill name, email and message fields.');
      return;
    }
    dispatch(submitContact(formData));
  };

  // when submission succeeds -> show toast, clear form, reset redux state after short delay
  useEffect(() => {
    if (success) {
      toast.success('Your message was sent — we will get back to you within 24 hours.');
      // clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: ''
      });

      // optionally keep success visible for a moment, then reset redux state so user can submit again
      const t = setTimeout(() => {
        dispatch(resetContact());
      }, 2500);

      return () => clearTimeout(t);
    }
  }, [success, dispatch]);

  // show server errors as toast(s)
  useEffect(() => {
    if (error) {
      // error may be object with message or errors array
      if (error.errors && Array.isArray(error.errors)) {
        error.errors.forEach((er) => toast.error(er));
      } else {
        const message = error.message || (error?.data && error.data.message) || 'Submission failed';
        toast.error(message);
      }
    }
  }, [error]);

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      {/* Toast container - keep only one in App (if here remove duplicate) */}
      <ToastContainer position="top-right" autoClose={4000} />

      {/* Full-screen loader overlay while sending */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="status"
          aria-busy="true"
          aria-label="Sending message"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center gap-4 w-11/12 max-w-sm">
            <svg
              className="animate-spin h-10 w-10 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <div className="text-center">
              <p className="font-semibold text-gray-900 dark:text-white">Sending your message...</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Waiting for confirmation from email server</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Start Your Project
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      label="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3"   /* inner padding added */
                    />
                    <Input
                      name="email"
                      type="email"
                      label="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3"
                    />
                  </div>

                  <Input
                    name="company"
                    label="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-3"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      name="budget"
                      label="Project Budget"
                      options={budgetOptions}
                      value={formData.budget}
                      onChange={handleChange}
                      className="px-4 py-3"
                    />
                    <Select
                      name="service"
                      label="Service Needed"
                      options={serviceOptions}
                      value={formData.service}
                      onChange={handleChange}
                      className="px-4 py-3"
                    />
                  </div>

                  <Textarea
                    name="message"
                    label="Tell us about your project *"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, requirements, and timeline..."
                    required
                    className="px-4 py-3"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>

                {/* Inline error display (optional) */}
                {error && !Array.isArray(error?.errors) && (
                  <div className="mt-4 text-sm text-red-600">
                    {error?.message || 'An error occurred while sending your message.'}
                  </div>
                )}
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+ (91)  6354 729 042</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">sahilp6354@gmail.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Innovation Ave<br />
                        San Francisco, CA 94105
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">By appointment only</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Schedule Consultation */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarDaysIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule a Free Consultation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Book a 30-minute discovery call to discuss your project requirements and explore how we can help.
                </p>
                <Button variant="accent" className="w-full">
                  Schedule Call
                </Button>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Initial response within 24 hours</li>
                  <li>• Detailed project proposal within 3-5 business days</li>
                  <li>• Free consultation call to discuss requirements</li>
                  <li>• Custom timeline and budget estimate</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
