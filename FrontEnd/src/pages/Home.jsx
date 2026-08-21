import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { courses } from '../data/courses';

const trustLogos = [
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  'https://images.pexels.com/photos/34577/pexels-photo-34577.jpeg',
  'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
  'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg'
];

const features = [
  'Custom web and mobile applications',
  'UI/UX design that converts',
  'Scalable cloud infrastructure',
  'Ongoing support and maintenance'
];

export default function Home() {
  let navigate = useNavigate()
  function handleNavigate() {
    navigate("/services")
  }
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Build the Future of Your
                <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We craft exceptional web applications, mobile experiences, and digital solutions that drive growth and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button onClick={() => navigate("/contact")} size="lg" as={Link} to="/contact">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={handleNavigate} variant="secondary" size="lg" as={Link} to="/services">
                  See Services
                </Button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={logo} alt={`Client ${index + 1}`} className="h-8 w-20 object-cover rounded" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full p-6 flex flex-col justify-between border border-gray-100 dark:border-gray-800/80 shadow-sm">
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-50 dark:border-gray-800/20">
                      <Badge variant="info">{service.timeline}</Badge>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {service.priceRange}
                      </span>
                    </div>
                    <Link
                      to={`/services`}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm"
                    >
                      Learn more
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" as={Link} to="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden border border-gray-100 dark:border-gray-800/80 shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg';
                    }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default">{project.industry}</Badge>
                      <Badge variant="info">{project.service}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-sm"
                    >
                      Visit Live Website
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" as={Link} to="/we-worked">
              View All Completed Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section (NEW Preview on Home Page) */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-50 dark:border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="info" className="mb-2">Education & Training</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Professional Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to learn MERN Full Stack, Python, UI/UX, or WordPress? We teach practical, project-based courses at highly affordable Indian prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full p-6 flex flex-col justify-between border border-gray-100 dark:border-gray-800/80 shadow-sm bg-gray-50/50 dark:bg-gray-800/30">
                  <div>
                    <div className="text-3xl mb-3">{course.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 font-medium">Duration: {course.duration}</span>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{course.price}</span>
                    </div>
                    <Link
                      to="/courses"
                      className="w-full text-center block text-xs font-semibold py-2 px-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-all"
                    >
                      View Syllabus & Enrol
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" as={Link} to="/contact">
                Start Your Project
              </Button>
              <Button variant="ghost" size="lg" as={Link} to="/we-worked" className="text-white border-white hover:bg-white hover:text-indigo-600">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}