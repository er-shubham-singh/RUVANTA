import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { portfolioProjects } from '../data/portfolio';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Case study not found
          </h1>
          <Button as={Link} to="/portfolio">
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioProjects
    .filter(p => p.id !== project.id && p.industry === project.industry)
    .slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Badge variant="default">{project.industry}</Badge>
              <Badge variant="info">{project.service}</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Results
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Measurable impact delivered for our client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results?.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {result.metric}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.approach}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {project.solution}
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Outcome
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                More success stories from the {project.industry} industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge variant="info" className="mb-3">
                        {relatedProject.service}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {relatedProject.description}
                      </p>
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {relatedProject.results?.[0]?.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {relatedProject.results?.[0]?.metric}
                        </div>
                      </div>
                      <Link
                        to={`/case-study/${relatedProject.slug}`}
                        className="block w-full text-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <Button variant="secondary" size="lg" as={Link} to="/contact">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
