import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, UserIcon, ShareIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Blog post not found
          </h1>
          <Button as={Link} to="/blog">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

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
              to="/blog"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Badge key={tag} variant="info">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Author</div>
                </div>
              </div>
              
              <div className="flex items-center text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <button className="flex items-center text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <ShareIcon className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                More insights on similar topics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {relatedPost.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <UserIcon className="h-3 w-3 mr-1" />
                        <span className="mr-4">{relatedPost.author}</span>
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Subscribe to our newsletter for more insights and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}