import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'NovaWorks Studio - Professional Digital Agency', description = '' }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NovaWorks Studio",
            "url": "https://novaworks.studio",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Innovation Ave",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
